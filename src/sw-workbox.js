// Helpers
const toAssetString = asset => asset.url || asset

const cacheAssets = () =>
  new Promise((resolve, reject) => {
    caches
      .open(staticCache)
      .then(cache => {
        console.log('Caching Assets...', contentToCache)
        cache.addAll(contentToCache)
        resolve()
      })
      .catch(error => {
        console.log('-- Caching Assets Error --', error)
        reject()
      })
  })

// Configuration
const staticCache = 'static-cache'
const dynamicAssetsToCache = self.__precacheManifest
// const preDefinedAssetsToCache = ['/', '/one','/two']

const listOfAssets = [...dynamicAssetsToCache]

const contentToCache = listOfAssets.map(toAssetString)

// Install Process
self.addEventListener('install', event => {
  console.log('Installing SW...')
  event.waitUntil(cacheAssets())
  // workbox.precaching.precacheAndRoute(listOfAssets)
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
      .then(res => {
        res && console.log('fetched response-> ', res)
        return res || fetch(event.request)
      })
      .catch(e => console.log('-- Erro When matching assets --', e))
  )
})

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// importScripts(
//   "/precache-manifest.054774adbe886ee6e3c29227ef1745b5.js"
// );

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// workbox.core.clientsClaim();

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {

//   blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
// });
