import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const dist=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../dist');
const read=p=>readFileSync(path.join(dist,p),'utf8');
test('FAQ à jour : roue multijeux, récompenses non commerciales, contact en service',()=>{
 const faq=read('qg/aide.js');
 assert.match(faq,/À quoi sert la roue \?/);
 assert.match(faq,/roue Ma_JesTik/);
 assert.match(faq,/page de contact/);
 assert.match(faq,/Boutique &amp; récompenses/);
 assert.doesNotMatch(faq,/Une page de contact dédiée sera ajoutée ultérieurement/);
 assert.doesNotMatch(faq,/À quoi sert la roue Fortnite/);
});
test('Connexion Twitch : retour sur mentions légales autorisé',()=>{
 const auth=read('qg/twitch-auth.js');
 assert.match(auth,/\'mentions-legales\'\]\)/);
 assert.match(auth,/sessionStorage/);
 assert.match(auth,/goodRoute/);
});
test('Métadonnées multijeux et informations d’activité cohérentes',()=>{
 const html=read('qg/index.html');
 assert.match(html,/roues personnalisables pour plusieurs jeux/);
 assert.match(html,/purges D1 sous garde-fous Cloudflare/);
 assert.doesNotMatch(html,/aucun effacement automatique/);
});
test('Indexation préparée, sans ouverture anticipée',()=>{
 const robots=read('robots.txt');
 const sitemap=read('sitemap.xml');
 assert.match(robots,/User-agent: \*/);
 assert.match(robots,/Disallow: \//);
 assert.match(robots,/Sitemap: https:\/\/ma-jestik.fr\/sitemap.xml/);
 assert.match(sitemap,/<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
 for(const p of ['https://ma-jestik.fr/','https://ma-jestik.fr/qg/','https://ma-jestik.fr/roue.html'])
   assert.ok(sitemap.includes('<loc>'+p+'</loc>'),p);
 assert.doesNotMatch(sitemap,/#\//);
});
