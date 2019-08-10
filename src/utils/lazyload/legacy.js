const modernLazyload = (imagesOnDOM = []) => {
  const lazy = () => {
    const imagesOnDOM = imagesOnDOM || queryImagesOnDOM()

    imagesOnDOM.forEach(imageNode => {
      if (typeof imageNode.lazyLoaded === 'undefined') {
        imageNode.lazyLoaded = false
      }

      if (!imageNode.lazyLoaded) {
        const {
          top: imageTopOffset,
          bottom: imageBottomOffset
        } = imageNode.getBoundingClientRect()
        const windowInnerHeight = window.innerHeight

        if (imageTopOffset <= windowInnerHeight - 200 && imageBottomOffset > 0) {
          const imageSrc = imageNode.dataset.src

          imageNode.src = imageSrc
          imageNode.lazyLoaded = true
        }
      }
    })
  }

  window.addEventListener('scroll', lazy)
  window.addEventListener('resize', lazy)
  window.addEventListener('orientationchange', lazy)
  document.addEventListener('DOMContentLoaded', lazy)
}

export default modernLazyload
