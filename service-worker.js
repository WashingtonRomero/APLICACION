const CACHE_NAME = 'dahi-masajes-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './imagenes/10.jpg',
  './imagenes/11.jpg',
  './imagenes/12.jpg',
  './imagenes/13.jpg',
  './imagenes/14.jpg',
  './imagenes/15.jpg',
  './imagenes/16.jpg',
  './imagenes/17.jpg'
];

self.addEventListener('install', function(event) {
  console.log('Service Worker: Instalando y precargando recursos.');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activando y limpiando cachés antiguas.');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});




