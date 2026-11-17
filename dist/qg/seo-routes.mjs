// Métadonnées et URL publiques du QG : source unique pour le navigateur et la publication.
export const SEO_PAGES = Object.freeze({
  "accueil": [
    "Ma_JesTik Gaming – Le QG communautaire",
    "Découvre le QG Ma_JesTik : roues personnalisables pour plusieurs jeux, défis Fortnite et Warzone, Killathon, Tribunal, profils et communauté gaming.",
    "qg",
    "Le QG gaming Ma_JesTik"
  ],
  "defis": [
    "Défis Fortnite et Warzone : missions gaming | Ma_JesTik",
    "Tire des défis gaming en solo ou en équipe dans Fortnite et Warzone, sélectionne tes critères et découvre les missions du QG Ma_JesTik.",
    "defis",
    "Défis et missions gaming"
  ],
  "killathon": [
    "Killathon gaming : compteur pour stream et OBS | Ma_JesTik",
    "Crée ton Killathon, fixe un objectif d’éliminations et utilise un compteur manuel avec un affichage OBS lié à ton compte Twitch.",
    "killathon",
    "Organiser un Killathon gaming"
  ],
  "tribunal": [
    "Tribunal gaming : sondages et votes | Ma_JesTik",
    "Découvre les sondages de la communauté Ma_JesTik, propose des questions et participe aux votes avec ton compte Twitch.",
    "tribunal",
    "Le Tribunal communautaire"
  ],
  "classement": [
    "Classements et scores de la communauté | Ma_JesTik",
    "Consulte les classements du QG Ma_JesTik et découvre les résultats communautaires selon les préférences de visibilité des membres.",
    "classement",
    "Classements du QG"
  ],
  "recompenses-mensuelles": [
    "Missions et récompenses mensuelles | Ma_JesTik",
    "Découvre les missions mensuelles du QG, les critères de participation et les règles des récompenses communautaires.",
    "classement",
    "Récompenses mensuelles"
  ],
  "boutique": [
    "Boutique de récompenses communautaires | Ma_JesTik",
    "Découvre les récompenses communautaires disponibles sur le Discord Ma_JesTik et leurs conditions. Ce n’est pas une boutique commerciale.",
    "qg",
    "Boutique et récompenses communautaires"
  ],
  "setup": [
    "Setup gaming et streaming de Ma_JesTik",
    "Explore le setup interactif Ma_JesTik : PC, écrans, périphériques et matériel de streaming, avec les fiches du matériel.",
    "setup",
    "Setup gaming et streaming"
  ],
  "apropos": [
    "À propos du QG gaming Ma_JesTik",
    "Découvre l’histoire, les valeurs et les ambitions de Ma_JesTik, un QG gaming indépendant pensé pour partager et créer ensemble.",
    "qg",
    "À propos du QG Ma_JesTik"
  ],
  "aide": [
    "Centre d’aide et FAQ du QG | Ma_JesTik",
    "Retrouve les réponses aux questions sur la roue, les défis, le Killathon, les votes, les profils et le fonctionnement du QG Ma_JesTik.",
    "qg",
    "Centre d’aide et FAQ"
  ],
  "contact": [
    "Contacter Ma_JesTik Gaming",
    "Une question, une suggestion ou un souci sur le QG ? Contacte Ma_JesTik via le formulaire de contact.",
    "qg",
    "Nous contacter"
  ],
  "mentions-legales": [
    "Mentions légales | Ma_JesTik",
    "Consulte les mentions légales du site Ma_JesTik, son éditeur, son hébergement et les informations relatives au site.",
    "qg",
    "Mentions légales"
  ],
  "confidentialite": [
    "Politique de confidentialité | Ma_JesTik",
    "Consulte les informations sur le traitement de tes données, tes droits et les réglages de confidentialité du QG Ma_JesTik.",
    "qg",
    "Politique de confidentialité"
  ],
  "createur": [
    "Code créateur Fortnite | Ma_JesTik",
    "Retrouve les informations sur le futur code créateur Epic Games de Ma_JesTik. Aucun code n’est disponible pour le moment.",
    "createur",
    "Code créateur Fortnite",
    false
  ]
});
const own=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);
export const publicPath=page=>own(SEO_PAGES,page)?(page==='accueil'?'/qg/':'/qg/'+page+'.html'):null;
export const pageAtPath=pathname=>{
 const match=/^\/qg\/([a-z-]+)\.html$/.exec(pathname);
 return match&&own(SEO_PAGES,match[1])?match[1]:'accueil';
};
export function routeFromLocation(pathname,hash){
 const value=hash.replace(/^#\/?/,'').split('?')[0];
 let raw='';
 try{raw=decodeURIComponent(value)}catch{}
 if(raw)return raw;
 return pageAtPath(pathname);
}
export function routeHref(page){
 return publicPath(page)||(page==='roue'?'/roue.html':'/qg/#/'+page);
}
export function canonicalPath(page){
 return page==='roue'?'/roue.html':publicPath(page)||'/qg/';
}
// Conserve le point de retour OAuth enregistré et les anciennes URLs des profils.
export function navigationTarget(page,hash,search=''){
 const publicUrl=publicPath(page);
 if(publicUrl&&!hash.includes('?'))return publicUrl+search;
 return '/qg/'+search+(hash.startsWith('#/')?hash:'#/'+page);
}
export function oauthReturnRoute(pathname,hash){
 return hash.startsWith('#/')?hash:'#/'+pageAtPath(pathname);
}
