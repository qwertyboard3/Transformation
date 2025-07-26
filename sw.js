
const CACHE_NAME = "cinefilos-cache-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./assets/cinefilos.png",
  "./assets/button.png",
  "./assets/button2.png",
  "./assets/entries.js",
  "./posters/fallback.jpg",
  "./sounds/pick.wav",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
