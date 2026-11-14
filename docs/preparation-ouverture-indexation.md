# Préparation technique avant ouverture — 14 novembre 2026

- Routes publiques indexables envisagées : racine, /qg/, /roue.html.
- Les routes '#/...' du QG sont des fragments JavaScript et ne constituent pas des URL de pages indexables indépendamment ; ne pas les ajouter au sitemap XML.
- `dist/sitemap.xml` est prêt.
- `dist/robots.txt` interdit temporairement l'exploration (`Disallow: /`) car les mentions légales et les contrôles RGPD restent en attente. **L'interdiction robots n'est pas un mécanisme de sécurité ni une garantie de désindexation.**
- Dès validation juridique, remplacer `Disallow: /` par `Allow: /` et contrôler Search Console. Aucun frais supplémentaire requis.
