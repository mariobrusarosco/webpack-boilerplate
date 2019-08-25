const native = () => 'loading' in HTMLImageElement.prototype
const modern = () => 'IntersectionObserver' in window

const support = {
  native: native(),
  modern: modern(),
  legacy: !native() && !modern()
}

export default support
