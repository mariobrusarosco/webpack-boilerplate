const modernLazyload = (imagesOnDOM = []) => {
  document.addEventListener('DOMContentLoaded', () => {
    let lazyImageObserver = new IntersectionObserver(
      function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy')
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      },
      { threshold: [0.25, 0.75] }
    )

    imagesOnDOM.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage)
    })
  })
}

export default modernLazyload
