const queryImagesOnDOM = () => [...document.querySelectorAll('img[data-src]')]

const modernLazyload = function() {
  // Images with data-src attribute inserted on the DOM
  let lazyImages = queryImagesOnDOM()

  return function() {
    lazyImages = queryImagesOnDOM()

    const lazyImageObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            let imgParent = lazyImage.parentNode.parentNode

            lazyImage.src = lazyImage.dataset.src
            imgParent.classList.add('lazy-loaded')

            lazyImageObserver.unobserve(lazyImage)
          }
        })
      },
      { threshold: [0.25, 0.75] }
    )

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage)
    })
  }
}

export default modernLazyload
