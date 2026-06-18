const CACHE_NAME = 'mikro-apodeipno-v12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './mikro-apodeipno.md',
  './chairetismoi.md',
  './favicon.svg',
  './byz.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Χρησιμοποιούμε fetch με 'no-cache' για να παρακάμψουμε την HTTP cache
      // και να πάρουμε σίγουρα τις τελευταίες εκδόσεις των αρχείων
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return fetch(new Request(url, { cache: 'no-cache' })).then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch ' + url);
            }
            return cache.put(url, response);
          });
        })
      );
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
