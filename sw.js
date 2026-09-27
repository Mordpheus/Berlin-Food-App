const CACHE_NAME = 'schnu-food-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './schnuddi_icon.png',
  './bg_muster.jpg.png',
  './titelbild.jpg.jpg',
  './story_map.jpg.png',
  './schnuddi_foodtruck.png.png',
  './schnuddi_ramen.png.png',
  './schnuddi_festmahl.jpg.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});