const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const root='https://ma-jestik.fr';
 const pages=[root+'/',root+'/qg/',root+'/roue.html',root+'/robots.txt',root+'/sitemap.xml'];
 for(const url of pages){
  const r=await fetch(url,{redirect:'follow'});console.log('HTTP',r.status,url);
  assert.equal(r.status,200,url);
 }
 const robots=await(await fetch(root+'/robots.txt')).text();assert.match(robots,/Disallow: \//);
 const sitemap=await(await fetch(root+'/sitemap.xml')).text();assert.match(sitemap,/ma-jestik.fr\/roue.html/);
 const api='https://ma-jestik-qg-members.maroodu11.workers.dev';
 const ok=await fetch(api+'/v1/health',{headers:{Origin:root}});assert.equal(ok.status,200);
 assert.equal(ok.headers.get('Access-Control-Allow-Origin'),root);
 const deny=await fetch(api+'/v1/health',{headers:{Origin:'https://not-allowed.example'}});assert.equal(deny.status,403);
 for(const route of ['/v1/me','/v1/me/activity']){
  const r=await fetch(api+route,{headers:{Origin:root}});assert.equal(r.status,401,route);
 }
 console.log('SECURITY: CORS+authorization non-authenticated denied');
 const browser=await chromium.launch({args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:900},locale:'fr-FR'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message.slice(0,150)));
 await page.goto(root+'/qg/setup-original/index.html',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(900);
 const hotspots=await page.locator('.hotspot[data-product-id]').count();assert.ok(hotspots>=10,'Insufficient products');
 const picks=['ps5','scuf','screen-main','pc-tower','chair'];
 for(const pick of picks){
  const hotspot=page.locator('.hotspot[data-product-id="'+pick+'"]');
  assert.equal(await hotspot.count(),1,'Missing '+pick);
  await hotspot.focus(); await page.keyboard.press('Enter');
  const dialog=page.locator('dialog.mj-product-dialog[open]');
  await dialog.waitFor({timeout:6000});
  const label=await dialog.locator('h2').textContent();
  const image=await dialog.locator('.mj-owned-photo').evaluate(img=>({src:img.src,complete:img.complete,width:img.naturalWidth,height:img.naturalHeight})).catch(()=>null);
  if(image){if(!image.complete)await dialog.locator('.mj-owned-photo').evaluate(img=>new Promise((ok,err)=>{if(img.complete){ok(null);return};img.addEventListener('load',()=>ok(null),{once:true});img.addEventListener('error',()=>err(Error('broken image')),{once:true})}));const width=await dialog.locator('.mj-owned-photo').evaluate(img=>img.naturalWidth);assert.ok(width>0,'Image de produit cassée '+pick)}
  console.log('PRODUCT_OK',pick,label?.trim().slice(0,65),image?.src||'sans photo');
  await page.keyboard.press('Escape');
  assert.equal(await dialog.count(),0,'Dialog not closed '+pick);
 }
 await page.goto(root+'/qg/#/aide',{waitUntil:'domcontentloaded'});await page.waitForTimeout(200);
 const txt=await page.locator('body').innerText();assert.ok(txt.includes('ROUE')||txt.includes('roue'));
 assert.ok(!txt.includes('Une page de contact dédiée sera ajoutée ultérieurement'));
 console.log('FAQ: corrected publicly');
 if(errors.length)throw Error('JS errors '+JSON.stringify(errors));
 await browser.close();
 console.log('SMOKE_FINAL_OK');
})().catch(e=>{console.error('SMOKE_FINAL_FAIL',e.message);process.exit(1)});
