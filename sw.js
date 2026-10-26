// Sigma · app 90 dias. Não guarda páginas em cache: sempre busca a versão mais recente.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
