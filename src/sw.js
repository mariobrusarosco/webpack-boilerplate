// console.log('My SW')
// Helpers
const toAssetString = asset => asset.url || asset

// Configuration
const staticCache = 'static-cache'

const dynamicAssetsToCache = self.__precacheManifest
const preDefinedAssetsToCache = ['/']

const listOfAssets = [...dynamicAssetsToCache, ...preDefinedAssetsToCache]

const contentToCache = listOfAssets.map(toAssetString)
// console.log(listOfAssets)
// console.log(workbox.precaching.precacheAndRoute)

// Install Process
self.addEventListener('install', event => {
  console.log('Installing SW...')

  // workbox.precaching.precacheAndRoute(listOfAssets)

  event.waitUntil(
    caches
      .open(staticCache)
      .then(cache => {
        console.log('Caching Assets...', contentToCache)
        cache.addAll(contentToCache)
      })
      .catch(error => {
        console.log('-- Caching Assets Error --', error)
      })
  )
})

// Activation Process
self.addEventListener('activate', event => {
  // console.log('Activating SW...')
})

// Fetch Process
self.addEventListener('fetch', event => {
  // console.log('fetched -> ', event.request.url)
})
