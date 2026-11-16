import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../dist/qg');
const read=(name)=>readFileSync(path.join(site,name),'utf8');
const script=read('mentions-legales.js');
const context=vm.createContext({});
vm.runInContext(script.replace(/^export /gm,''),context,{filename:'mentions-legales.js'});
const html=vm.runInContext('legalMarkup()',context);

test('page : noms hébergeurs confirmés, contenu informatif et coordonnées publiques',()=>{
 assert.match(html,/MENTIONS <em>LÉGALES/);
 assert.match(html,/OVH SAS \(OVHcloud\)/);
 assert.match(html,/2 rue Kellermann/);
 assert.match(html,/59100 Roubaix/);
 assert.match(html,/tel:1007/);
 assert.doesNotMatch(html,/GitHub Pages — GitHub, Inc\./);
 assert.match(html,/Cloudflare, Inc\./);
 assert.match(html,/101 Townsend Street/);
 assert.match(html,/contact@ma-jestik\.fr/);
 assert.match(html,/\#\/confidentialite/);
 assert.match(html,/\#\/contact/);
 assert.match(html,/2026-11-16/);
});

test('coordonnées de l’éditeur communiquées à l’hébergeur, sans publication privée',()=>{
 assert.match(html,/renseigné son identité et ses coordonnées auprès de son hébergeur OVHcloud/);
 assert.match(html,/article 1-1, II/);
 assert.match(html,/coordonnées personnelles ne sont pas publiées ici/);
 assert.doesNotMatch(html,/GitHub Support|toujours attendue|en cours de clarification/);
 assert.doesNotMatch(html,/Mathieu Charbonneau/);
 assert.doesNotMatch(html,/SIRET\s*:\s*\d+/);
 assert.doesNotMatch(html,/\+1\s*\(877\)/);
});

test('accessibilité des liens vers la page sur desktop et mobile',()=>{
 const index=read('index.html');
 assert.equal((index.match(/href="#\/mentions-legales"/g)||[]).length,2);
 assert.equal((index.match(/Mentions légales · à compléter/g)||[]).length,0);
 assert.match(index,/mentions-legales\.css\?v=/);
 assert.match(index,/qg\.js\?v=20261116-ovh1/);
 const router=read('qg.js');
 assert.match(router,/\'mentions-legales\':legalMarkup/);
 assert.match(router,/if\(page===\'mentions-legales\'\)mountLegal\(\)/);
 assert.match(router,/mentions-legales\.js\?v=/);
});

test('navigation interne sans changement de route',()=>{
 for(const id of ['presentation','edition','hebergement','droits','utilisation','donnees','references']){
  assert.ok(html.includes('data-legal-jump="'+id+'"'));
  assert.ok(html.includes('id="mj-legal-'+id+'"'));
 }
 assert.match(script,/prefers-reduced-motion/);
 const css=read('mentions-legales.css');
 assert.match(css,/@media\(max-width:760px\)/);
});

test('aucune donnée sensible et pas de modification d’autres modules',()=>{
 assert.doesNotMatch(html,/date de naissance|carte d'identité|token secret|webhook token/i);
 assert.ok(read('qg.js').includes("const pages={accueil:home"));
 assert.ok(read('index.html').includes('href="#/confidentialite"'));
});
