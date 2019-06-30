// Helpers
const toAssetString = asset => asset.url || asset

const cacheAssets = () => {
  console.log('cacheAssets')
  return caches
    .open(staticCachePath)
    .then(cache => {
      console.log('-- Caching Assets... --')
      cache.addAll(contentToCache)
    })
    .catch(error => {
      console.log('-- Caching Assets Error --', error)
    })
}

const clearPreviousCache = () => {
  caches.keys().then(keys => {
    return Promise.all(
      keys
        .filter(key => key !== staticCachePath)
        .map(keyToDelete => caches.delete(keyToDelete))
    )
  })
}

const cacheDynamicAsset = event => fetchResponse => {
  console.log('cacheDynamicAsset', event.request.url)

  return caches
    .open(dynamicCachePath)
    .then(cache => cache.put(event.request.url, fetchResponse) && fetchResponse)
}

// Configuration
const staticCachePath = 'static-cache-v1'
const dynamicCachePath = 'dynamic-cache-v1'

const buildGeneratedAssets = self.__precacheManifest
const preDefinedAssets = [{ url: '/fake404.html' }]

const listOfAssets = [...buildGeneratedAssets, ...preDefinedAssets]

const contentToCache = listOfAssets.map(toAssetString)

// Install Process
self.addEventListener('install', event => {
  console.log('Installing SW...')

  event.waitUntil(cacheAssets())
})

// Activation Process
self.addEventListener('activate', event => {
  console.log('Activating SW...')
  // Clearing Cache Process
  // event.waitUntil(clearPreviousCache())
})

// Fetch Process
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(chachedResponse => {
        chachedResponse
          ? console.log('[ --- Chached Response for: ', chachedResponse.url, ' ]')
          : console.warn('[ --- No Chached Response for: ', event.request.url, ' ]')

        return (
          chachedResponse ||
          fetch(event.request)
            .then(cacheDynamicAsset(event))
            .catch(e => {
              console.log('-- No cached response found +  Error when fetching --', e)
            })
        )
      })
      .catch(e => console.log('-- Error When matching assets --', e))
  )
})
