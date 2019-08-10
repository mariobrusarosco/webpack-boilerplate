const support = function() {
  return {
    native: 'loading' in HTMLImageElement.prototype,
    intersectionObeserver: 'IntersectionObserver' in window,
    legacy: !!this.native || !!this.modern
  }
}

export default support
