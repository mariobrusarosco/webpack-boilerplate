// // Helpers
// const toAssetString = asset => asset.url || asset

// const cacheAssets = () => {
//   return caches
//     .open(staticCachePath)
//     .then(cache => {
//       console.log('-- Caching Assets... --', contentToCache)
//       cache.addAll(contentToCache)
//       console.log('cache: ', cache)
//     })
//     .catch(error => {
//       console.log('-- Caching Assets Error --', error)
//     })
// }

// const clearPreviousCache = () => {
//   caches.keys().then(keys => {
//     return Promise.all(
//       keys
//         .filter(key => key !== staticCachePath)
//         .map(keyToDelete => caches.delete(keyToDelete))
//     )
//   })
// }

// const cacheAssetOnTheFly = event => fetchResponse => {
//   return caches.open(staticCachePath).then(cache => {
//     debugger
//     cache.put(event.request.url, fetchResponse)
//     return fetchResponse
//   })
// }

// // Configuration
// const staticCachePath = 'static-cache-v1'

// const buildGeneratedAssets = self.__precacheManifest
// const preDefinedAssets = []

// const listOfAssets = [...buildGeneratedAssets, ...preDefinedAssets]

// const contentToCache = listOfAssets.map(toAssetString)

// // Install Process
// self.addEventListener('install', event => {
//   console.log('Installing SW...')

//   event.waitUntil(cacheAssets())
// })

// // Activation Process
// self.addEventListener('activate', event => {
//   console.log('Activating SW...')
//   // Clearing Cache Process
//   // event.waitUntil(clearPreviousCache())
// })

// // Fetch Process
// self.addEventListener('fetch', event => {
//   // event.respondWith(
//   //   caches
//   //     .match(event.request)
//   //     .then(chachedResponse => {
//   //       if (chachedResponse) {
//   //         console.log('[ --- Chached Response for: ', chachedResponse.url, ' ]')
//   //         return chachedResponse
//   //       }
//   //       console.log('[ --- No Chached Response for: ', event.request.url, ' ]')
//   //       console.log('... fetching ...')
//   //       fetch(event.request)
//   //         .then(cacheAssetOnTheFly(event))
//   //         .catch(e => {
//   //           console.log('[ --- No cached response found --- ]', e)
//   //         })
//   //     })
//   //     .catch(e => console.log('-- Error When matching assets --', e))
//   // )
// })
