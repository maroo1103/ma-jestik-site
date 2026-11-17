/* Politique de confidentialité — mise à jour du 17/11/2026.
   Identité du responsable publiée avec son accord ; aucune coordonnée privée ni secret. */
export function privacyMarkup(){
 return `
 <div class="mj-privacy">
  <header class="mj-privacy-hero" aria-labelledby="mjPrivacyTitle">
   <div class="mj-privacy-eyebrow">AIDE &amp; INFORMATIONS <span aria-hidden="true">✦</span> DONNÉES PERSONNELLES</div>
   <h1 id="mjPrivacyTitle">TES DONNÉES.<br><em>EN TOUTE CLARTÉ.</em></h1>
   <p>Voici comment le QG Ma_JesTik utilise les informations nécessaires à la connexion Twitch, aux activités communautaires, aux missions et récompenses, et aux messages envoyés depuis le site.</p>
   <div class="mj-privacy-hero-meta"><span>POLITIQUE DE CONFIDENTIALITÉ</span><span>Mise à jour : <time datetime="2026-11-17">17 novembre 2026</time></span></div>
  </header>

  <div class="mj-privacy-layout">
   <nav class="mj-privacy-nav" aria-label="Sommaire de la confidentialité">
    <strong>AU SOMMAIRE</strong>
    <button type="button" data-privacy-jump="responsable">Responsable &amp; contact</button>
    <button type="button" data-privacy-jump="donnees">Données utilisées</button>
    <button type="button" data-privacy-jump="finalites">Utilisation &amp; bases légales</button>
    <button type="button" data-privacy-jump="destinataires">Prestataires</button>
    <button type="button" data-privacy-jump="durees">Conservation</button>
    <button type="button" data-privacy-jump="droits">Tes droits</button>
    <button type="button" data-privacy-jump="stockage">Stockage &amp; sécurité</button>
   </nav>

   <div class="mj-privacy-sections">
    <section class="mj-privacy-section" id="mj-privacy-responsable" aria-labelledby="mj-privacy-responsable-title">
     <span class="mj-privacy-n">QUI GÈRE CES INFORMATIONS ?</span>
     <h2 id="mj-privacy-responsable-title">RESPONSABLE &amp; CONTACT</h2>
     <p>Le responsable du traitement est <strong>Mathieu Charbonneau</strong>, éditeur à titre personnel du site <strong>Ma_JesTik</strong>, accessible à l'adresse <a href="https://ma-jestik.fr/">ma-jestik.fr</a>. Il détermine les finalités et les moyens des traitements décrits sur cette page.</p>
     <p>Tu peux poser une question, demander l'accès ou la suppression de tes données, ou signaler un problème à <a href="mailto:contact@ma-jestik.fr">contact@ma-jestik.fr</a>, ou utiliser le <a href="#/contact">formulaire de contact</a>.</p>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-donnees" aria-labelledby="mj-privacy-donnees-title">
     <span class="mj-privacy-n">QU'EST-CE QUI EST UTILISÉ ?</span>
     <h2 id="mj-privacy-donnees-title">LES DONNÉES DU QG</h2>
     <div class="mj-privacy-data-grid">
      <div><h3>Connexion Twitch</h3><p>Identifiant Twitch, pseudo, nom de connexion, avatar et jeton d'accès nécessaire à la vérification d'identité. Le jeton reste dans le stockage de session du navigateur, et l'identité est contrôlée auprès de Twitch. Les pages publiques sont accessibles sans connexion ; certaines fonctions participatives nécessitent de se connecter.</p></div>
      <div><h3>Profil communautaire</h3><p>Présentation, nom affiché, préférences visuelles, jeux favoris, région/pays facultatif (sans géolocalisation automatique) et identifiants Instagram, TikTok ou Discord si tu les renseignes. La région est visible uniquement lorsque tu rends ton profil public. Ces données proviennent de Twitch pour l'identité du compte et de tes propres saisies pour la personnalisation. Le profil public et la présence au classement sont désactivés par défaut et font l'objet de deux choix indépendants. Si tu actives ta présence au classement, ton identifiant Twitch technique peut accompagner ton pseudo et tes points pour ouvrir ta fiche membre ; son contenu détaillé reste inaccessible si ton profil est privé.</p></div>
      <div><h3>Défis &amp; Killathon</h3><p>Participation aux défis, pronostics, points, classement, objectifs et compteur Killathon. Les informations associées au compte sont conservées dans la base du QG.</p></div>
      <div><h3>Tribunal</h3><p>Questions, choix de réponses, propositions, résultats, dates, pseudos et identifiants Twitch des auteurs ou votants. Tu peux y participer avec Twitch sans nécessairement créer un profil communautaire.</p></div>
      <div><h3>Missions &amp; récompenses mensuelles</h3><p>Pour suivre une mission ouverte, le QG associe ton identifiant Twitch aux pronostics résolus et aux votes du Tribunal éligibles pour calculer ta progression. Lorsque l'éditeur confirme une récompense déjà remise manuellement sur Discord, la base du QG peut enregistrer le mois, ton identifiant Twitch, le nombre de pièces et la date de cette confirmation. Ce suivi n'envoie aucune pièce sur Discord.</p></div>
      <div><h3>Boutique &amp; récompenses Discord</h3><p>La boutique du QG présente les récompenses, leurs conditions et des liens vers des salons Discord. Le solde en pièces, les achats, les stocks et les commandes sont gérés sur Discord avec DraftBot, pas par le site. Les éventuels pseudos ou identifiants de jeu nécessaires à une remise sont à communiquer dans le cadre de l'échange sur Discord, et non dans la boutique du QG.</p></div>
      <div><h3>Nous contacter</h3><p>Catégorie, sujet, e-mail de réponse, pseudo facultatif, message et éventuelles pièces jointes. Le formulaire utilise une vérification Cloudflare Turnstile contre les envois automatisés. Les champs obligatoires sont signalés ; le pseudo et les pièces jointes restent facultatifs.</p></div>
      <div><h3>Données techniques</h3><p>Les services d'hébergement et de protection peuvent traiter des données de connexion, telles que l'adresse IP et des journaux techniques, nécessaires au fonctionnement et à la sécurité.</p></div>
     </div>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-finalites" aria-labelledby="mj-privacy-finalites-title">
     <span class="mj-privacy-n">POURQUOI CES DONNÉES ?</span>
     <h2 id="mj-privacy-finalites-title">UTILISATION &amp; BASES LÉGALES</h2>
     <p>Les traitements sont limités aux finalités décrites ci-dessous. Le QG ne vend pas tes données et les informations de profil facultatives ne sont pas nécessaires pour consulter les pages publiques.</p>
     <ul class="mj-privacy-points">
      <li><strong>Connexion et fonctionnement des outils demandés :</strong> vérifier l'identité Twitch, faire fonctionner les profils, votes, classements et compteurs. Base : l'intérêt légitime à faire fonctionner et maintenir le service communautaire demandé (article 6, §1, f du RGPD). Les informations d'identité et les participations sont nécessaires aux fonctions réservées aux membres ; les pages publiques restent accessibles sans compte.</li>
      <li><strong>Visibilité publique choisie :</strong> afficher ton profil ou tes résultats au classement sur la base de ton consentement (article 6, §1, a du RGPD), recueilli par deux réglages distincts, décochés par défaut. Tu peux retirer chacun de ces choix dans Mon profil, sans perdre l'accès aux outils du QG.</li>
      <li><strong>Missions mensuelles et suivi des remises :</strong> vérifier les objectifs à partir des participations déjà enregistrées, afficher la progression aux membres connectés et garder une trace des récompenses déclarées remises par l'éditeur. Base : l'intérêt légitime à organiser les activités communautaires et prévenir les doubles remises (article 6, §1, f du RGPD). Les calculs de points et de progression sont automatiques ; la confirmation de la remise reste manuelle. Aucun versement de pièces Discord n'est automatisé par le site.</li>
      <li><strong>Réponse aux messages :</strong> recevoir et traiter les demandes envoyées volontairement, au titre de l'intérêt légitime à répondre aux sollicitations (article 6, §1, f).</li>
      <li><strong>Protection technique :</strong> prévention des abus, vérification de session et anti-spam, au titre de l'intérêt légitime à sécuriser le service (article 6, §1, f). Les données techniques sont limitées à ce qui est utile au diagnostic, au fonctionnement et à la protection du service.</li>
     </ul>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-destinataires" aria-labelledby="mj-privacy-destinataires-title">
     <span class="mj-privacy-n">AVEC QUI ?</span>
     <h2 id="mj-privacy-destinataires-title">PRESTATAIRES &amp; DESTINATAIRES</h2>
     <p>Selon la fonctionnalité utilisée : <strong>Twitch</strong> vérifie la connexion ; <strong>Cloudflare</strong> fournit les Workers, la base D1 et la vérification anti-spam Turnstile ; <strong>OVHcloud (OVH SAS)</strong> héberge les pages statiques, gère le nom de domaine et la boîte de réception des messages de contact ; <strong>Resend</strong> achemine ces messages, y compris leurs éventuelles pièces jointes. <strong>GitHub</strong> est utilisé pour le code source et le déploiement automatisé vers OVHcloud, et non comme hébergeur principal de ma-jestik.fr.</p>
     <p>L'éditeur peut accéder aux données nécessaires à la gestion du site. Les autres visiteurs ne voient que les contenus destinés à être publics : notamment certains sondages, résultats, classements ou profils rendus visibles.</p>
     <p><strong>Boutique externe :</strong> les boutons de la boutique ouvrent des pages de <strong>Discord</strong> ; les commandes et pièces sont gérées dans ce service avec le bot <strong>DraftBot</strong>. Discord et le service du bot peuvent traiter les informations liées à ton compte et à tes commandes selon leurs propres règles. Le QG ne récupère pas automatiquement le solde, les commandes ni les coordonnées Discord à partir de ces liens. Les éventuels échanges de vérification ou de remise se déroulent sur Discord ; leur effacement ne découle pas automatiquement de la suppression d'un profil QG.</p>
     <p><strong>Autres appels externes :</strong> l'accueil interroge <strong>DecAPI</strong> pour afficher si la chaîne Twitch est en direct. Des avatars Twitch et des illustrations de jeux peuvent être chargés depuis les serveurs des plateformes et éditeurs concernés, notamment Steam, Rockstar Games, Minecraft, Riot Games, Xbox et eGamersWorld. La photo du setup interactif est chargée depuis un autre site hébergé sur <strong>GitHub Pages</strong>. Ces requêtes peuvent communiquer l'adresse IP et des informations techniques du navigateur aux serveurs concernés. Les polices de caractères, elles, sont hébergées directement avec le site. Les liens vers des réseaux sociaux ouvrent leurs services uniquement lorsque tu les utilises.</p>
     <p><strong>Localisation des données et transferts :</strong> la base communautaire Cloudflare D1 est configurée avec une juridiction européenne : la base fonctionne et conserve ses données dans l'Union européenne. Cette restriction ne s'étend pas à tous les traitements des Workers ou aux autres prestataires, qui peuvent intervenir hors de l'Espace économique européen. Cloudflare publie son <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer">accord de traitement des données</a> et ses <a href="https://www.cloudflare.com/cloudflare-customer-scc/" target="_blank" rel="noopener noreferrer">clauses contractuelles types</a>. Resend indique que les messages et journaux qu'il traite sont conservés aux États-Unis et déclare participer au cadre UE–États-Unis de protection des données ; son <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">accord de traitement</a> prévoit également des clauses contractuelles types. Les garanties applicables aux autres flux externes et les durées de conservation des données techniques propres à OVHcloud restent à préciser. Pour toute précision ou copie des garanties, contacte l'éditeur. Consulte aussi les politiques de confidentialité d'<a href="https://www.ovhcloud.com/fr/terms-and-conditions/privacy-policy/" target="_blank" rel="noopener noreferrer">OVHcloud</a>, de <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare</a>, de <a href="https://www.twitch.tv/p/fr-fr/legal/privacy-notice/" target="_blank" rel="noopener noreferrer">Twitch</a> et les <a href="https://resend.com/security/gdpr" target="_blank" rel="noopener noreferrer">informations RGPD de Resend</a>.</p>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-durees" aria-labelledby="mj-privacy-durees-title">
     <span class="mj-privacy-n">COMBIEN DE TEMPS ?</span>
     <h2 id="mj-privacy-durees-title">DURÉES DE CONSERVATION</h2>
     <p>Voici les durées <strong>retenues par l'éditeur</strong> pour les données de la communauté. Les nettoyages automatiques concernés sont programmés chaque jour ; les demandes individuelles d'effacement sont traitées séparément.</p>
     <div class="mj-privacy-table-wrap">
      <table class="mj-privacy-table">
       <thead><tr><th scope="col">Données</th><th scope="col">Durée retenue</th></tr></thead>
       <tbody>
        <tr><td>Compte, profil, Killathon, points et votes liés au membre</td><td>Jusqu'à la suppression demandée, ou 6 mois consécutifs sans activité Twitch authentifiée.</td></tr>
        <tr><td>Participation aux missions mensuelles</td><td>Progression calculée à partir des pronostics et votes déjà conservés dans le QG, selon les durées indiquées pour ces données.</td></tr>
        <tr><td>Historique des remises des missions mensuelles (identifiant Twitch, mois, pièces, date)</td><td>12 mois après la confirmation de la remise, ou plus tôt si le compte QG associé est effacé. La purge automatique est planifiée quotidiennement.</td></tr>
        <tr><td>Propositions Tribunal en attente</td><td>3 mois après leur création.</td></tr>
        <tr><td>Propositions Tribunal refusées</td><td>30 jours après la décision.</td></tr>
        <tr><td>Propositions Tribunal acceptées</td><td>6 mois après la décision.</td></tr>
        <tr><td>Sondages terminés du Tribunal et leurs votes</td><td>12 mois après clôture ou expiration. Les éventuels anciens sondages sans date de fin nécessitent une clôture manuelle.</td></tr>
        <tr><td>Messages reçus chez OVH</td><td>6 mois après le dernier échange, sauf nécessité justifiée. Pièces jointes : dès qu'elles ne sont plus utiles.</td></tr>
        <tr><td>Messages et journaux de livraison traités chez Resend</td><td>30 jours selon la documentation de son offre gratuite (hors obligations légales particulières).</td></tr>
        <tr><td>Sauvegardes de récupération Cloudflare D1</td><td>Jusqu'à 7 jours après une modification ou un effacement sur l'offre gratuite (Time Travel).</td></tr>
        <tr><td>Journaux d'exécution des Workers Cloudflare</td><td>3 jours sur l'offre gratuite, selon le barème applicable au 16 novembre 2026 ; les journaux sont activés pour le diagnostic et la sécurité.</td></tr>
       </tbody>
      </table>
     </div>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-droits" aria-labelledby="mj-privacy-droits-title">
     <span class="mj-privacy-n">C'EST TON CHOIX</span>
     <h2 id="mj-privacy-droits-title">TES DROITS SUR TES DONNÉES</h2>
     <p>Selon ta situation et les conditions prévues par le RGPD, tu peux demander l'accès à tes données, leur correction, leur effacement ou leur limitation, t'opposer à certains traitements, et demander la portabilité lorsqu'elle est applicable. Tu peux notamment t'opposer aux traitements fondés sur l'intérêt légitime pour des raisons tenant à ta situation particulière. Lorsque le consentement est utilisé, tu peux le retirer à tout moment, sans effet rétroactif.</p>
     <p>Tu peux modifier les informations et réglages publics de ton profil dans <a href="#/profil">Mon profil</a>. La rubrique permet aussi de demander la suppression du compte QG. Cette suppression ne touche pas ton compte Twitch.</p>
     <p>Si tu as voté ou proposé une question au Tribunal sans créer de profil QG, écris-nous directement : il n'est pas nécessaire de créer un compte pour exercer tes droits. Un accès et un effacement de ces participations peuvent être effectués après vérification de l'identité Twitch par le service du Tribunal ; tu peux aussi nous contacter à ce sujet. Les textes libres, historiques techniques et sauvegardes peuvent nécessiter un traitement distinct.</p>
     <p>Les informations de progression et de récompense rattachées à ton compte QG peuvent aussi faire l'objet d'une demande. La suppression du compte QG ne supprime pas ton compte Discord, les messages de commande ni les informations détenues par Discord ou DraftBot : adresse-toi également à ces services pour leurs propres données.</p>
     <div class="mj-privacy-contact">
      <div><strong>UNE QUESTION OU UNE DEMANDE RGPD ?</strong><span>Contact direct, même sans profil Ma_JesTik.</span></div>
      <a href="mailto:contact@ma-jestik.fr" class="mj-privacy-contact-btn">✉ contact@ma-jestik.fr</a>
     </div>
     <p>Une vérification d'identité proportionnée peut être demandée pour protéger tes données. Une réponse est apportée dans un délai d'un mois à compter de la demande ; en cas de complexité ou de demandes nombreuses, ce délai peut être prolongé de deux mois, après information dans le premier mois. Tu peux aussi déposer une réclamation auprès de la <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">CNIL</a>.</p>
    </section>

    <section class="mj-privacy-section" id="mj-privacy-stockage" aria-labelledby="mj-privacy-stockage-title">
     <span class="mj-privacy-n">SUR TON NAVIGATEUR</span>
     <h2 id="mj-privacy-stockage-title">STOCKAGE LOCAL &amp; SÉCURITÉ</h2>
     <p>Le site utilise le stockage du navigateur pour les fonctionnalités demandées :
     </p><ul class="mj-privacy-points">
      <li><strong>Session Twitch (sessionStorage) :</strong> conserve le jeton après actualisation de la page, jusqu'à la déconnexion, la fermeture de la session de l'onglet ou l'invalidation du jeton.</li>
      <li><strong>Sécurité de connexion (sessionStorage et localStorage) :</strong> état de vérification temporaire valable 20 minutes, retiré lors du retour de Twitch.</li>
      <li><strong>Personnalisation et outils (localStorage et IndexedDB) :</strong> brouillons de profil, défis locaux, configuration de la roue et images personnalisées. Ces données peuvent rester sur l'appareil jusqu'à leur effacement ou leur remplacement ; les brouillons sont retirés lorsqu'ils sont enregistrés avec succès sur le serveur ou lors de la suppression du compte depuis l'appareil.</li>
     </ul><p>Tu peux supprimer les données locales dans les réglages de ton navigateur ; cela peut te déconnecter ou effacer tes personnalisations locales.</p>
     <p>Le site emploie HTTPS et vérifie côté serveur les demandes authentifiées. Cloudflare Turnstile protège le formulaire de contact contre les robots. Ces mesures réduisent certains risques sans offrir de garantie absolue de sécurité.</p>
     <p>La boutique du QG n'enregistre pas de panier, de paiement ou de solde Discord. Cliquer sur un lien de commande ouvre un service externe ; ses modalités de connexion, de stockage et de confidentialité sont distinctes de celles du QG.</p>
     <p>Le site n'intègre pas de régie publicitaire ni de script de mesure d'audience dans ses pages. L'hébergeur peut établir des statistiques techniques de consultation à partir de ses journaux. Les ressources externes et le dispositif anti-robot Turnstile peuvent avoir leurs propres mécanismes techniques ; la présence éventuelle de cookies tiers est encore à vérifier. Les paramètres de confidentialité de ton navigateur permettent de gérer ces stockages.</p>
     <p>Cette politique sera actualisée si les fonctionnalités ou les traitements changent. Tu peux demander des précisions à <a href="mailto:contact@ma-jestik.fr">contact@ma-jestik.fr</a>.</p>
    </section>
   </div>
  </div>
  <div class="mj-privacy-bottom"><span aria-hidden="true">✦</span> MA_JESTIK · UN QG QUI ÉVOLUE, UNE INFORMATION QUI RESTE ACCESSIBLE.</div>
 </div>`;
}

export function mountPrivacy(){
 const root=document.querySelector('.mj-privacy');
 if(!root)return;
 root.addEventListener('click',event=>{
  const button=event.target.closest('[data-privacy-jump]');
  if(!button||!root.contains(button))return;
  const target=root.querySelector('#mj-privacy-'+button.dataset.privacyJump);
  if(!target)return;
  target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  target.querySelector('h2')?.setAttribute('tabindex','-1');
  target.querySelector('h2')?.focus({preventScroll:true});
 });
}
