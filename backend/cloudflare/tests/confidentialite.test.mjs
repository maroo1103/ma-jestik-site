import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";

const read = path => readFileSync(new URL("../../../dist/qg/"+path,import.meta.url),"utf8");

test("confidentialité : route et liens du pied de page sur ordinateur et mobile",()=>{
 const router=read("qg.js"),html=read("index.html");
 assert.match(router,/import \{privacyMarkup,mountPrivacy\} from '\.\/confidentialite\.js\?v=/);
 assert.match(router,/confidentialite:privacyMarkup/);
 assert.match(router,/page==='confidentialite'\)mountPrivacy/);
 assert.equal((html.match(/href="#\/confidentialite">Confidentialité<\/a>/g)||[]).length,2);
 assert.match(html,/confidentialite\.css\?v=/);
 assert.match(html,/qg\.js\?v=[a-zA-Z0-9_-]+/);
});

test("confidentialité : information essentielle avant la collecte du formulaire",()=>{
 const contact=read("contact.js");
 assert.match(contact,/href="#\/confidentialite" target="_blank" rel="noopener noreferrer"/);
});

test("confidentialité : transparence sur les purges, le responsable et les prestataires",()=>{
 const page=read("confidentialite.js");
 assert.match(page,/Les nettoyages automatiques concernés sont programmés chaque jour/);
 assert.doesNotMatch(page,/mode simulation|aucune purge réelle n'est activée/);
 assert.match(page,/Le responsable du traitement est <strong>Mathieu Charbonneau<\/strong>/);
 assert.equal((page.match(/Mathieu Charbonneau/g)||[]).length,1);
 assert.match(page,/OVHcloud \(OVH SAS\).*héberge les pages statiques/);
 assert.doesNotMatch(page,/GitHub Pages<\/strong> publie les pages statiques/);
 assert.match(page,/contact@ma-jestik\.fr/);
 assert.match(page,/Cloudflare/);
 assert.match(page,/Resend/);
 assert.match(page,/OVHcloud/);
 assert.match(page,/Twitch/);
 assert.match(page,/CNIL/);
 assert.doesNotMatch(page,/\[À (COMPLÉTER|VÉRIFIER|VALIDER)\]/);
 assert.doesNotMatch(page,/EM-494-AS|ZVD1FI6LRE0J/);
});

test("confidentialité : OAuth reconnaît la page",()=>{
 const auth=read("twitch-auth.js");
 assert.match(auth,/routes=new Set\(\[[^\]]*'confidentialite'/);
});


test("confidentialité : localisation, conservation, choix de visibilité et polices locales",()=>{
 const page=read("confidentialite.js"),profile=read("profil.js");
 assert.match(page,/juridiction européenne/);
 assert.match(page,/États-Unis/);
 assert.match(page,/30 jours selon la documentation/);
 assert.match(page,/Jusqu'à 7 jours/);
 assert.match(page,/3 jours sur l'offre gratuite/);
 assert.match(page,/consentement \(article 6, §1, a du RGPD\)/);
 assert.match(page,/deux réglages distincts, décochés par défaut/);
 assert.match(page,/IndexedDB/);
 assert.match(profile,/Ces deux choix sont facultatifs/);
 assert.match(profile,/href="#\/confidentialite" target="_blank" rel="noopener noreferrer"/);
 for(const path of ["qg.css","killathon-overlay.css","../style.css"]){
  const css=read(path);
  assert.doesNotMatch(css,/fonts\.googleapis\.com/);
  assert.match(css,/fonts\/fonts\.css/);
 }
 const fonts=read("../fonts/fonts.css");
 assert.match(fonts,/Barlow Condensed/);
 assert.match(fonts,/DM Sans/);
 for(const [,file] of fonts.matchAll(/url\('([^']+\.ttf)'\)/g)){
  const font=readFileSync(new URL("../../../dist/fonts/"+file,import.meta.url));
  assert.ok(font.length>10000);
 }
});
