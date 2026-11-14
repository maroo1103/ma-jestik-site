# Ma_JesTik — état opérationnel après correctifs (14 novembre 2026)

## Modifications réellement déployées

1. FAQ mise à jour : roue multijeux, récompenses Discord non commerciales, centre d'aide relié au formulaire de contact existant. Les textes obsolètes ont été supprimés.
2. Métadonnées du QG : description fidèle aux jeux pris en charge, commentaire technique conforme au statut réel des purges D1.
3. Authentification Twitch : l'URL de retour conserve la route `#/mentions-legales` ; l'import Twitch est maintenu **unique et sans paramètre de version** conformément au test de singleton. Actualisation de l'import de la FAQ et version du routeur pour ne pas conserver les anciens textes en cache.
4. SEO : `/sitemap.xml` contient les trois URL canoniques du site. `/robots.txt` bloque **temporairement** l'exploration en attendant la clarification juridique et l'ouverture. Ce blocage n'est pas une mesure de sécurité ni une garantie de désindexation. Au lancement, remplacer `Disallow: /` par `Allow: /` et vérifier la Search Console.
5. Poids du site : le déploiement GitHub Pages optimise les photographies WebP du setup dans le répertoire d'artefact seulement, sans modifier les sources Git. Résultat confirmé : 24 fichiers allégés, **26,58 Mo économisés** à dimensions et mode inchangés. Les trois archives ZIP de contenu ont été conservées car le script a trouvé des références : ne pas supprimer de fichiers utilisés.
6. Contrôles durables : `backend/cloudflare/tests/site-readiness.test.mjs` et déclencheurs du workflow RGPD mis à jour. **121 tests passent** sur le dernier déploiement vérifié.
7. Scripts de vérification temporaires supprimés du dépôt. Aucun service payant ajouté.

## Recette réalisée automatiquement

- 24 chargements QG/accueil en Chromium desktop et mobile : aucune erreur JavaScript, image cassée ou débordement horizontal détecté.
- 10 tests de navigation : menu PC/mobile, FAQ, choix Fortnite et Warzone, contact sans envoi, roue, setup, mentions légales, ressources et API.
- Cinq API publiques : réponse HTTP 200 aux endpoints de santé membres, Tribunal, contact, missions et Killathon.
- Sécurité sans connexion : requête CORS avec origine non autorisée refusée (403) ; membres `/v1/me` et `/v1/me/activity` sans Twitch refusés (401).
- Fiches du setup testées **au clavier** : PS5, SCUF Envision Pro, MSI MAG 27CQ6F, tour PC, fauteuil CORSAIR TC100 ; photos chargées, boîtes de dialogue ouvertes et refermées.
- Pages et fichiers `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/icons/icon-192.png` et miniatures Open Graph : HTTP 200.
- D1 : Cron quotidien de nettoyage à 03:00 UTC et drapeaux de rétention activés ; aucune ligne admissible aux critères vérifiés lors de l'audit (requêtes agrégées uniquement). Un marqueur de restauration temporelle (Time Travel) est disponible, mais **aucune restauration** n'a été exécutée.

## Actions nécessaires du propriétaire (impossibles à prouver sans ses comptes)

1. **Twitch (PC puis mobile) :** se connecter au QG, revenir depuis Twitch, actualiser par F5, naviguer, se déconnecter. Contrôler que la session et les menus réagissent normalement.
2. **Profil avec compte de test :** créer et modifier le profil, changer les préférences, activer/désactiver le profil public et l'affichage au classement. Vérifier depuis une navigation privée et un autre compte. Pour tester la suppression, utiliser uniquement un **compte de test**, pas son vrai compte.
3. **Votes / Tribunal à deux comptes :** avec le compte du propriétaire, ouvrir un défi/vote ou sondage ; avec le second compte, voter, puis clôturer et vérifier le classement et les résultats. Utiliser des données de démonstration qui pourront être effacées.
4. **Contact :** envoyer un message réel avec Turnstile et une petite pièce jointe, puis confirmer réception et réponse sur la boîte professionnelle OVH. L'audit automatique a volontairement arrêté le parcours avant l'envoi.
5. **Killathon OBS :** créer une session et actualiser manuellement le compteur ; vérifier le lien OBS dans la configuration locale du streamer. L'audit ne peut pas ouvrir OBS sur le PC du propriétaire.
6. **Sauvegarde D1 :** conserver un export local chiffré et vérifier la restauration **dans une base isolée**, jamais dans la base de production. Les possibilités de Time Travel ne sont pas une preuve de procédure de restauration testée.
7. **Ouverture officielle :** attendre la réponse GitHub Support n° 4982347 concernant l'identification confidentielle de l'éditeur et finaliser les informations juridiques/RGPD. Une fois validé, permettre l'exploration via `robots.txt` et référencer les URL canoniques.

## Liens de preuve

- Dernier test QG valide : https://github.com/maroo1103/ma-jestik-site/actions/runs/43597964540
- Déploiement valide : https://github.com/maroo1103/ma-jestik-site/actions/runs/43597964455
- Contrôle des fiches produits et API valide : https://github.com/maroo1103/ma-jestik-site/actions/runs/43598069659

> Important : un test HTTP 200 ou 121 tests unitaires ne remplacent pas une recette authentifiée de bout en bout. Aucun test automatisé n'a envoyé de formulaire, voté, supprimé de données ou modifié la base D1 de production.
