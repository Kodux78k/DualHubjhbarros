const CACHE='hub-assert-power-v1';
const CORE=['./','./index.html','./offline.html','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-192-maskable.png','./icons/icon-512-maskable.png',
  './icons/icon-192-mono.png','./icons/icon-512-mono.png','./icons/apple-touch-icon-180.png',
  './apps/apps.json','./apps/app2.html'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(self.skipWaiting()));
});
self.addEventListener('activate', e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).catch(()=>caches.match('./offline.html')));
  }else if(new URL(req.url).origin===location.origin){
    e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{
      const copy=res.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); return res;
    })));
  }
});
