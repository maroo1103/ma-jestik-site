# Préparation technique avant ouverture — 14 novembre 2026

- Routes publiques indexables envisagées : racine, /qg/, /roue.html.
- Les routes '#/...' du QG sont des fragments JavaScript et ne constituent pas des URL de pages indexables indépendamment ; ne pas les ajouter au sitemap XML.
- `dist/sitemap.xml` est prêt.
- `dist/robots.txt` interdit temporairement l'exploration (`Disallow: /`) car les mentions légales et les contrôles RGPD restent en attente. **L'interdiction robots n'est pas un mécanisme de sécurité ni une garantie de désindexation.**
- Dès validation juridique, remplacer `Disallow: /` par `Allow: /` et contrôler Search Console. Aucun frais supplémentaire requis.

## Ouverture — 17 novembre 2026

Les pages légales actualisées pour OVHcloud sont publiées depuis le 16 novembre ; la recette RGPD automatisée a été exécutée. L'exploration publique est ouverte conformément à la demande de lancement. Le sitemap conserve uniquement les trois URL canoniques. Le domaine www redirige vers le domaine principal. GitHub Pages reste un secours déclenché manuellement ; OVH reste le déploiement automatique principal. Les contrôles d'accès et préférences de visibilité des membres ne changent pas. La vérification dans Search Console et la revue des garanties de certains prestataires restent à suivre.
