const {chromium}=require('playwright');const fs=require('fs');
const routes=['accueil','roue','defis','killathon','tribunal','classement','recompenses-mensuelles','boutique','setup','apropos','createur','profil','aide','contact','confidentialite','mentions-legales'];
(async()=>{
 fs.mkdirSync('site-audit',{recursive:true});
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const results=[];
 for(const [view,width,height] of [['desktop',1440,900],['mobile',390,844]]){
   const ctx=await browser.newContext({viewport:{width,height},locale:'fr-FR',reducedMotion:'reduce'});
   const page=await ctx.newPage(),errors=[],httpErrors=[];
   page.on('pageerror',e=>errors.push(e.message.slice(0,170)));
   page.on('console',m=>{if(m.type()==='error')errors.push(m.text().slice(0,170))});
   page.on('response',r=>{if(r.status()>=400)httpErrors.push({status:r.status(),url:r.url().slice(0,150)})});
   const selected=view==='desktop'?['landing',...routes]:['accueil','roue','defis','apropos','contact','confidentialite','mentions-legales'];
   for(const route of selected){
    const url='https://ma-jestik.fr/'+(route==='landing'?'':'qg/#/'+route);
    const t=Date.now(),a=errors.length,b=httpErrors.length;let status=null,problem=null;
    try{const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:22000});status=response?.status();await page.waitForTimeout(1050)}catch(e){problem=e.message.slice(0,200)}
    const info=await page.evaluate(()=>({title:document.title,heads:[...document.querySelectorAll('h1')].map(n=>n.textContent.trim().slice(0,100)),textLength:(document.querySelector('main')?.innerText||document.body.innerText||'').length,scrollWidth:document.documentElement.scrollWidth,innerWidth:innerWidth,links:document.querySelectorAll('a').length,brokenImages:[...document.querySelectorAll('img')].filter(x=>x.complete&&!x.naturalWidth).map(x=>x.getAttribute('src')).slice(0,10),legalLinks:document.querySelectorAll('a[href="#/mentions-legales"]').length})).catch(e=>({error:e.message}));
    const item={view,route,status,elapsed:Date.now()-t,problem,...info,errors:errors.slice(a).slice(0,8),httpErrors:httpErrors.slice(b).slice(0,8)};
    results.push(item); console.log('AUDIT '+JSON.stringify(item).slice(0,750));
    if(['landing','accueil','roue','defis','apropos','contact','mentions-legales'].includes(route)) await page.screenshot({path:'site-audit/'+view+'-'+route+'.png'}).catch(()=>{});
   }
   await ctx.close();
 }
 await browser.close();
 fs.writeFileSync('site-audit/report.json',JSON.stringify({generated:new Date().toISOString(),results},null,2));
 console.log('SUMMARY '+JSON.stringify({total:results.length,badHttp:results.filter(r=>r.status!==200),empty:results.filter(r=>r.textLength<100),overflow:results.filter(r=>r.scrollWidth>r.innerWidth),jsErrors:results.filter(r=>r.errors.length),failedResources:results.filter(r=>r.httpErrors.length)}).slice(0,5500));
})().catch(e=>{console.error('AUDIT_FAILED',e);process.exit(1)});
