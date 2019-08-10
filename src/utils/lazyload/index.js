// Legacy Support fo Lazyload
import legacyLazyload from './legacy'
// Modern Support fo Lazyload
import modernLazyload from './modern'

const lazyload = () => {
  // if ('IntersectionObserver' in window) {
  if (false) {
    modernLazyload()
  } else {
    legacyLazyload()
  }
}

export default lazyload
