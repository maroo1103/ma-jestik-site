#!/usr/bin/env python3
"""Préparer la copie publique GitHub Pages sans toucher aux sources Git.

- Supprime uniquement les archives ZIP dont aucun fichier HTML, CSS, JS ou
  JSON du site ne mentionne le nom ou le chemin.
- Réencode à taille identique les grandes images WebP du setup à qualité élevée.
- En cas d'erreur, conserve le fichier d'origine (jamais de rupture d'image).
Le script fonctionne uniquement sur le dossier 'dist' du runner éphémère.
"""
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def prepare(dist: Path):
    if not (dist / "qg" / "index.html").is_file():
        raise SystemExit("Destination GitHub Pages invalide")
    source_types = {".html", ".css", ".js", ".mjs", ".json", ".xml"}
    sources = [
        p for p in dist.rglob("*")
        if p.is_file() and p.suffix.lower() in source_types
        and p.stat().st_size <= 1_000_000
    ]
    contents = [p.read_text(encoding="utf-8", errors="ignore") for p in sources]
    removed = removed_bytes = 0
    for archive in (dist / "assets").glob("*.zip"):
        # Une mention du nom (même dans une configuration) protège l'archive.
        if any(archive.name in txt or f"assets/{archive.name}" in txt for txt in contents):
            print("Archive utilisée conservée :", archive.name)
            continue
        size = archive.stat().st_size
        archive.unlink()
        removed += 1
        removed_bytes += size

    folder = dist / "qg" / "setup-original" / "images" / "products"
    converted = saved = 0
    for src in sorted(folder.glob("*.webp")):
        original = src.stat().st_size
        if original < 450_000:
            continue
        candidate = src.with_name(src.stem + ".optimized.tmp")
        try:
            with Image.open(src) as img:
                img.load()
                dims, mode = img.size, img.mode
                img.save(candidate, format="WEBP", quality=88, method=6)
            with Image.open(candidate) as check:
                check.verify()
            with Image.open(candidate) as check:
                if check.size != dims or check.mode != mode:
                    raise ValueError("Dimensions ou transparence modifiées")
            reduced = candidate.stat().st_size
            # Aucune transformation si le gain est insignifiant.
            if reduced < original * 0.83:
                candidate.replace(src)
                converted += 1
                saved += original - reduced
                print(f"WebP optimisée : {src.name} {original // 1024} -> {reduced // 1024} Kio")
        except Exception as exc:
            print(f"Conservation du visuel original {src.name}: {type(exc).__name__}: {exc}")
        finally:
            candidate.unlink(missing_ok=True)
    print(f"Préparation terminée : {removed} archives inutilisées exclues ({removed_bytes/1e6:.2f} Mo), "
          f"{converted} fiches WebP allégées ({saved/1e6:.2f} Mo économisés)")
    return removed, converted


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("dist", type=Path)
    prepare(parser.parse_args().dist)
