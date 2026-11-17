# Préparation SEO des pages du QG

La génération des pages publiques est commune à OVH et au secours GitHub Pages. Chaque rubrique publique possède un fichier HTML distinct dans /qg/ lors de la publication, avec un titre, une description et une URL canonique propres. Les liens existants avec #/ restent compatibles et redirigent côté navigateur vers la page propre lorsque possible. La roue directe reste /roue.html ; les profils et l'affichage OBS restent hors du sitemap. Le code créateur est marqué noindex tant qu'aucun code n'est disponible.

Le fichier dist/qg/seo-routes.mjs contient la liste unique des métadonnées. scripts/generate-seo-pages.mjs utilise le modèle dist/qg/index.html pour générer les pages uniquement pendant la publication. Ne pas ajouter manuellement de pages dupliquées.

Avant une mise en production : exécuter les tests SEO et RGPD, vérifier les accès directs, navigation aller-retour, roue intégrée et connexion Twitch sur une recette de test. Après publication : vérifier toutes les URL du sitemap et demander l'exploration dans Search Console.
