self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
    console.log("Service Worker instalado!");
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});