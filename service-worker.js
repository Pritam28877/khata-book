importScripts("/precache-manifest.d25e5b0bc920d1aa191ee586522030af.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
    'https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js'
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL('/index.html'), {
        blacklist: [/^\/_/, /\/[^\/?]+\.[^\/]+$/],
    }
);

workbox.routing.registerRoute(
    ({
        url
    }) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts',
    }),
    'GET'
);

workbox.routing.registerRoute(
    ({
        url
    }) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts',
    }),
    'GET'
);

// background sync for push api's
const bgSyncPlugin = new workbox.backgroundSync.Plugin('kb-queue', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    /\/v1\/(books|customers|transactions)\/sync/,
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'POST'
);