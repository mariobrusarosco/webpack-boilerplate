// Legacy Support fo Lazyload
import legacyLazyload from './legacy'
// Modern Support fo Lazyload
import modernLazyload from './modern'
// Native Support fo Lazyload
import nativeLazyload from './native'

const lazyload = () => {
  const imagesOnDOM = Array.prototype.slice.call(document.querySelectorAll('img'))

  if ('loading' in HTMLImageElement.prototype) {
    console.log('native')
    // if (false) {
    nativeLazyload(imagesOnDOM)
  } else if ('IntersectionObserver' in window) {
    console.log('modern')
    modernLazyload(imagesOnDOM)
  } else {
    console.log('legacy')
    legacyLazyload(imagesOnDOM)
  }
}

export default lazyload
