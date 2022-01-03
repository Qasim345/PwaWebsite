self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "dist/style.css","dist/main.js", "dist/logo.png","dist/material-icons.ttf"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respndWith(
    catches.match(e.request).then(respons => {
      return respons || fetch(e.request);
    })
  );
});