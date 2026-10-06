/* Service worker mínimo: permite instalar la página como app. No guarda datos de la plataforma. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin caché: todo va directo a la red */ });
