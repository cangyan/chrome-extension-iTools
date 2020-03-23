const staticCacheName = 'site-static-v1'
const dynamicCacheName = 'site-dynamic-v1'

const assets = [
    '/',
    '/index.html',
    '/popup.html',
    '/eventPage.js',
    '/js/app.js',
    '/fallback.html'
]

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            if(!(evt.request.url.indexOf('http') === 0)) return;
            console.log('caching shell assets')
            cache.addAll(assets)
        }).catch()
    )
})

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            console.log('activate caching assets')
            return Promise.all(keys.filter(key => key !== staticCacheName && key !== dynamicCacheName).map(key => caches.delete(key)))
        })
    )
})

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    if (!/^https?:$/i.test(new URL(evt.request.url).protocol)) return;

                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            })
        }).catch(() => {
            if (evt.request.url.indexOf(".html") > -1) {
                return caches.match('/fallback.html')
            }
        })
    )
})