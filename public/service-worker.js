importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute("/login", new workbox.strategies.NetworkFirst({ cacheName: "startPage" }));

workbox.routing.registerRoute(
  new RegExp("/"),
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    cacheExpiration: { maxEntries: 20 }
  })
);

workbox.precaching.precacheAndRoute([{"revision":"1e304876b323253a4b8fb18caa76c32a","url":"110-1101288_potatoe-asdf-potato-png-transparent-png.png:Zone.Identifier"},{"revision":"7dcbb85185d300328f35a944b4887e7d","url":"icon_192X192.png"},{"revision":"7dcbb85185d300328f35a944b4887e7d","url":"icon_512X512.png"},{"revision":"d12f72b7833f68a3320288dc9478aa88","url":"manifest.json"}]);
