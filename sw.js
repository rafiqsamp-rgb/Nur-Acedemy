const CACHE="nur-academy-v14-full";
const CORE=["./","./index.html","./style.css","./app.js","./config.js","./manifest.json","./assets/icon-192.png","./assets/icon-512.png","./assets/nur-academy-logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok)caches.open(CACHE).then(x=>x.put(e.request,r.clone())).catch(()=>{});return r}).catch(()=>caches.match("./index.html"))))});
