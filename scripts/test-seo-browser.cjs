const {chromium}=require('playwright');
const {createServer}=require('node:http');
const {readFileSync,statSync}=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'../dist');
const mime={'.js':'text/javascript','.mjs':'text/javascript','.html':'text/html','.css':'text/css','.json':'application/json','.xml':'application/xml'};
const server=createServer((req,res)=>{
  const u=new URL(req.url,'http://local');
  if(u.pathname==='/'||u.pathname==='/index.html'){res.writeHead(301,{Location:'/qg/'+u.search});return res.end();}
  let file=path.join(root,u.pathname);
  if(u.pathname.endsWith('/'))file=path.join(file,'index.html');
  try{const b=readFileSync(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(b);}
  catch{if(u.pathname.endsWith('.css')){res.writeHead(200,{'Content-Type':'text/css'});res.end('');}else{res.writeHead(404);res.end('Not found');}}
});
(async()=>{
 let browser;
 try{
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const origin='http://127.0.0.1:'+server.address().port;
  browser=await chromium.launch({headless:true});
  const context=await browser.newContext();
  const page=await context.newPage();
  const errors=[];page.on('pageerror',err=>errors.push(err.message));
  await context.route('**/*',async route=>{
   const url=route.request().url();
   if(url.startsWith(origin+'/'))return route.continue();
   // Aucun appel réel à Twitch, Cloudflare ou autre service de production.
   return route.abort();
  });
  const {SEO_PAGES,publicPath}=await import('../dist/qg/seo-routes.mjs');
  const ready=()=>page.waitForFunction(()=>document.querySelector('#qgTwitchAccount')?.hidden===false);
  await page.goto(origin+'/');await ready();assert.equal(page.url(),origin+'/qg/');
  for(const [name,info] of Object.entries(SEO_PAGES)){
   const url=publicPath(name);const response=await page.goto(origin+url);assert.equal(response.status(),200);await ready();
   assert.equal(page.url(),origin+url);
   assert.equal(await page.title(),info[0]);
   assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),'https://ma-jestik.fr'+url);
   assert.ok(await page.locator('#page h1').count()>=1,name+' : titre visible');
   console.log('Direct : '+url);
  }
  await page.goto(origin+'/qg/#/defis');await ready();await page.waitForURL(origin+'/qg/defis.html');
  await page.locator('a[data-qg-route=killathon]:visible').first().click();await page.waitForURL(origin+'/qg/killathon.html');
  await page.goBack();await page.waitForURL(origin+'/qg/defis.html');await page.waitForFunction(()=>document.title.startsWith('Défis Fortnite'));
  await page.goForward();await page.waitForURL(origin+'/qg/killathon.html');await page.waitForFunction(()=>document.title.startsWith('Killathon gaming'));
  await page.locator('a[data-qg-route=profil]:visible').first().click();await page.waitForURL(origin+'/qg/#/profil');
  assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex,follow');
  await page.locator('a[data-qg-route=roue]:visible').first().click();await page.waitForURL(origin+'/qg/#/roue');
  assert.ok(await page.locator('#wheelFrame').count());
  await page.goto(origin+'/qg/defis.html');await ready();
  const authRequest=page.waitForRequest(r=>r.url().startsWith('https://id.twitch.tv/oauth2/authorize'));
  await page.locator('.qg-login').click();const request=await authRequest;const auth=new URL(request.url());
  assert.equal(auth.searchParams.get('redirect_uri'),origin+'/qg/');
  // Si l'interception annule la navigation, elle ne quitte pas le serveur local.
  const state=auth.searchParams.get('state');
  await page.goto(origin+'/qg/#error=access_denied&state='+state);await ready();await page.waitForURL(origin+'/qg/defis.html');
  assert.ok(!page.url().includes('state='));
  assert.deepEqual(errors,[]);
  console.log('Navigation, historique, profil, roue et retour OAuth simulé : OK');
 }finally{if(browser)await browser.close();server.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
