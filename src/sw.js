// Helpers
const toAssetString = asset => asset.url || asset

const cacheAssets = () =>
  new Promise((resolve, reject) => {
    caches
      .open(staticCache)
      .then(cache => {
        console.log('Caching Assets...')
        cache.addAll(contentToCache)
        resolve()
      })
      .catch(error => {
        console.log('-- Caching Assets Error --', error)
        reject()
      })
  })

// Configuration
const staticCache = 'static-cache-v1'
const dynamicAssetsToCache = self.__precacheManifest
const preDefinedAssetsToCache = []

const listOfAssets = [...dynamicAssetsToCache]

const contentToCache = listOfAssets.map(toAssetString)

// Install Process
self.addEventListener('install', event => {
  console.log('Installing SW...')

  event.waitUntil(cacheAssets())
})

// Activation Process
self.addEventListener('activate', event => {
  // console.log('Activating SW...')
})

// Fetch Process
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(chachedResponse => {
        // console.log('[ --- Fetch Intercepted for: ', event.request.url, ' ]')

        chachedResponse
          ? console.log('[ --- Responded with: ', chachedResponse.url, ' ]')
          : console.log('[ --- No Chached Response for: ', event.request.url, ' ]')

        return chachedResponse || fetch(event.request)
      })
      .catch(e => console.log('-- Error When matching assets --', e))
  )
})
