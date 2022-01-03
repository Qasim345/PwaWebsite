self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "dist/style.css","dist/main.js","dist/typed.js", "dist/jquery.min.js", "dist/logo.png", "dist/king.png", "dist/material-icons.ttf", "dist/ProSans.ttf"]);
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