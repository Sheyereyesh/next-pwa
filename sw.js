importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute("/login", new workbox.strategies.NetworkFirst({ cacheName: "startPage" }));

workbox.routing.registerRoute(
  new RegExp("/"),
  new workbox.strategies.CacheFirst({
    cacheName: "pages",
    cacheExpiration: { maxEntries: 20 }
  })
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
