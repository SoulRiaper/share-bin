import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute([
  ...(self.__WB_MANIFEST || []),
  {url: '/assets/bootstrap-icons-BOrJxbIo.woff', revision: '1.0'},
  {url: '/assets/bootstrap-icons-BtvjY1KL.woff2', revision: '1.0'},
]);

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});