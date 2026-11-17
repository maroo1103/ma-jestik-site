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
test('Indexation publique et sitemap canonique après ouverture',()=>{
 const robots=read('robots.txt');
 const sitemap=read('sitemap.xml');
 assert.match(robots,/User-agent: \*/);
 assert.match(robots,/^Allow: \/$/m);
 assert.doesNotMatch(robots,/^Disallow:\s*\/$/m);
 assert.match(robots,/Sitemap: https:\/\/ma-jestik.fr\/sitemap.xml/);
 assert.match(sitemap,/<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
 for(const p of ['https://ma-jestik.fr/qg/','https://ma-jestik.fr/roue.html'])
   assert.ok(sitemap.includes('<loc>'+p+'</loc>'),p);
 assert.doesNotMatch(sitemap,/#\//);
});

test('OVH reste le déploiement automatique et redirige www, Pages reste manuel',()=>{
 const ovh=readFileSync(path.resolve(dist,'../.github/workflows/deployer-ovh.yml'),'utf8');
 const pages=readFileSync(path.resolve(dist,'../.github/workflows/publier-roue.yml'),'utf8');
 assert.match(ovh,/^  push:/m);
 assert.ok(ovh.includes('RewriteEngine On'));
 assert.ok(ovh.includes(String.raw`RewriteCond %{HTTP_HOST} ^www\.ma-jestik\.fr$ [NC]`));
 assert.ok(ovh.includes('RewriteRule ^ https://ma-jestik.fr%{REQUEST_URI} [R=301,L,NE]'));
 assert.match(pages,/^  workflow_dispatch:/m);
 assert.doesNotMatch(pages,/^  push:/m);
});
