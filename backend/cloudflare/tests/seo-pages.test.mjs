import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {SEO_PAGES,publicPath,routeFromLocation,navigationTarget,oauthReturnRoute,routeHref,canonicalPath} from '../../../dist/qg/seo-routes.mjs';
import {renderPublicPage,renderSitemap} from '../../../scripts/generate-seo-pages.mjs';
const template=readFileSync(new URL('../../../dist/qg/index.html',import.meta.url),'utf8');
const sourceSitemap=readFileSync(new URL('../../../dist/sitemap.xml',import.meta.url),'utf8');
test('Toutes les routes publiques ont une URL distincte, des métadonnées et une navigation valide',()=>{
 const urls=new Set(), titles=new Set();
 for(const [page,info] of Object.entries(SEO_PAGES)){
  const path=publicPath(page),html=renderPublicPage(template,page);
  assert(!urls.has(path));urls.add(path);
  assert(!titles.has(info[0]));titles.add(info[0]);
  assert(html.includes('rel="canonical" href="https://ma-jestik.fr'+path+'"'));
  assert(html.includes('<h1>'+info[3]+'</h1>'));
  assert(html.includes('data-qg-route="defis"'));
  assert.equal(routeFromLocation(path,''),page);
  assert.equal(routeFromLocation('/qg/','#/'+page),page);
  assert.equal(navigationTarget(page,'#/'+page),path);
  assert.equal(oauthReturnRoute(path,''),'#/'+page);
  assert.equal(html.includes('content="noindex,follow"'),info[4]===false);
 }
});
test('Sitemap sans fragments, redirection d’accueil, profils ni page créateur vide',()=>{
 const sitemap=renderSitemap();
 assert.equal(sourceSitemap,sitemap);
 assert(!sitemap.includes('#/'));
 assert(!sitemap.includes('/profil'));
 assert(!sitemap.includes('/membre'));
 assert(!sitemap.includes('/createur'));
 assert(!sitemap.includes('<loc>https://ma-jestik.fr/</loc>'));
 assert(sitemap.includes('<loc>https://ma-jestik.fr/roue.html</loc>'));
});
test('Anciennes routes et retour OAuth conservés',()=>{
 assert.equal(navigationTarget('membre','#/membre?id=123'),'/qg/#/membre?id=123');
 assert.equal(navigationTarget('profil','#/profil'),'/qg/#/profil');
 assert.equal(navigationTarget('roue','#/roue'),'/qg/#/roue');
 assert.equal(routeHref('roue'),'/roue.html');
 assert.equal(canonicalPath('roue'),'/roue.html');
 assert.equal(oauthReturnRoute('/qg/','#/profil'),'#/profil');
 assert.equal(navigationTarget('defis','','?test=1'),'/qg/defis.html?test=1');
});
