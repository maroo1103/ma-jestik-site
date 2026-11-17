import {readFileSync,writeFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {SEO_PAGES,publicPath,routeHref} from '../dist/qg/seo-routes.mjs';

const origin='https://ma-jestik.fr';
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function replaceOne(text,pattern,replacement){
 const matches=text.match(new RegExp(pattern.source,pattern.flags.includes('g')?pattern.flags:pattern.flags+'g'))||[];
 if(matches.length!==1)throw new Error('Balise ambiguë : '+pattern);
 return text.replace(pattern,()=>replacement);
}
export function renderPublicPage(template,page){
 const info=SEO_PAGES[page];
 if(!info)throw new Error('Page non publique : '+page);
 const [title,description,image,heading,indexable=true]=info;
 const url=origin+publicPath(page);
 let html=template;
 html=replaceOne(html,/<title>[^<]*<\/title>/,'<title>'+escape(title)+'</title>');
 html=replaceOne(html,/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+url+'">');
 for(const [attribute,content] of [['name="description"',description],['property="og:url"',url],['property="og:title"',title],['property="og:description"',description],['name="twitter:title"',title],['name="twitter:description"',description],['property="og:image:alt"',heading+' — Ma_JesTik']]){
  html=replaceOne(html,new RegExp('<meta '+attribute+' content="[^"]*">'),'<meta '+attribute+' content="'+escape(content)+'">');
 }
 for(const attribute of ['property="og:image"','property="og:image:secure_url"','name="twitter:image"']){
  html=replaceOne(html,new RegExp('<meta '+attribute+' content="[^"]*">'),'<meta '+attribute+' content="'+origin+'/og/'+image+'.png?v=20261109-artworks2">');
 }
 html=html.replace('</head>','  <meta name="robots" content="'+(indexable?'index,follow':'noindex,follow')+'">\n</head>');
 html=replaceOne(html,/<div class="page-enter" id="page" aria-live="polite"><\/div>/,'<div class="page-enter" id="page" aria-live="polite"><div class="page-head"><h1>'+escape(heading)+'</h1><p>'+escape(description)+'</p></div></div>');
 // Les liens HTML sont découvrables sans JavaScript. Le routeur conserve la navigation sans rechargement.
 html=html.replace(/href="#\/([a-z-]+)"/g,(_,route)=>'href="'+routeHref(route)+'" data-qg-route="'+route+'"');
 return html;
}
export function renderSitemap(){
 const urls=[origin+'/roue.html',...Object.entries(SEO_PAGES).filter(([,info])=>info[4]!==false).map(([page])=>origin+publicPath(page))];
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(url=>'  <url><loc>'+url+'</loc></url>').join('\n')+'\n</urlset>\n';
}
export function generate(dist){
 const qg=join(dist,'qg'),template=readFileSync(join(qg,'index.html'),'utf8');
 for(const page of Object.keys(SEO_PAGES))writeFileSync(join(qg,page==='accueil'?'index.html':page+'.html'),renderPublicPage(template,page));
 // L'accueil racine redirige vers le QG : une seule adresse canonique dans le sitemap.
 const root=join(dist,'index.html'),entry=readFileSync(root,'utf8');
 writeFileSync(root,replaceOne(entry,/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+origin+'/qg/">'));
 writeFileSync(join(dist,'sitemap.xml'),renderSitemap());
 console.log('SEO : '+Object.keys(SEO_PAGES).length+' pages préparées, sitemap actualisé.');
}
if(import.meta.url===pathToFileURL(resolve(process.argv[1]||'')).href)generate(resolve(process.argv[2]||'dist'));
