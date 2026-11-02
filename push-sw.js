// push-sw.js
//
// Service worker isključivo za PUSH NOTIFIKACIJE. Namjerno NE presrijeta
// 'fetch' događaje i NE kešira ni jedan resurs (HTML, JS, API pozivi) — svaki
// zahtjev ide direktno na mrežu, kao da service worker-a i nema, osim za
// prikaz push notifikacija. Ovo je namjerno: raniji problem (korisnici su
// viđali zastarjelu verziju sajta) dolazio je od agresivnog keširanja, pa ovaj
// fajl to potpuno izbjegava.
//
// Pri svakoj instalaciji/aktivaciji (novi deploy ovog fajla), obriše SVAKI
// keš koji eventualno postoji pod ovim origin-om — čisti za sobom ako je
// neka STARIJA verzija service worker-a (ili nekad davno neki drugi kod)
// ostavila kešmuch sadržaj koji bi inače ostao zaglavljen zauvijek.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const imenaKeseva = await caches.keys();
      await Promise.all(imenaKeseva.map((ime) => caches.delete(ime)));
      await self.clients.claim();
    })()
  );
});

// Push notifikacija stiže sa servera (send-notification.js, live-event.js,
// check-news.js) u obliku: { title, body, url, icon, tag }
self.addEventListener('push', (event) => {
  let podaci = {};
  try {
    podaci = event.data ? event.data.json() : {};
  } catch (e) {
    podaci = { title: 'ROLaj ME', body: event.data ? event.data.text() : 'Nova vijest' };
  }

  const naslov = podaci.title || 'ROLaj ME';
  const opcije = {
    body: podaci.body || '',
    icon: podaci.icon || '/icon-192.png',
    badge: '/icon-192.png',
    tag: podaci.tag || 'rolaj-me',
    data: { url: podaci.url || '/' }
  };

  event.waitUntil(self.registration.showNotification(naslov, opcije));
});

// Klik na notifikaciju — fokusira postojeći tab ako je aplikacija već
// otvorena, ili otvara novi ako nije.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const ciljUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    (async () => {
      const clientList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of clientList) {
        if ('focus' in client) {
          client.navigate(ciljUrl);
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(ciljUrl);
      }
    })()
  );
});
