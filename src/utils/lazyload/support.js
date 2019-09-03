const native = () => 'loading' in HTMLImageElement.prototype
const modern = () => 'IntersectionObserver' in window

const support = {
  native: false, //native(),
  modern: false, //modern(),
  legacy: !native() && !modern()
}

export default support
