self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('your-cache-name').then(cache => {
        return cache.addAll([
          '/',
          'index.html',
          'soccer_192x192.png',
          'soccer_512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  