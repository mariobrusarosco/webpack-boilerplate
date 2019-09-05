import * as Vibrant from 'node-vibrant'
import * as test from 'rgbaster'

const setBgColor = async (img, box) => {
  const vib = new Vibrant(img)

  const swatches = await vib.getPalette()
  console.log(img, swatches)

  const vibrant = swatches['Vibrant'].getRgb()
  const lightVibrant = swatches['LightVibrant'].getRgb()
  const darkVibrant = swatches['DarkVibrant'].getRgb()
  const muted = swatches['Muted'].getRgb()
  const darkMuted = swatches['DarkMuted'].getRgb()
  const lightMuted = swatches['LightMuted'].getRgb()

  //   // const backgroundRule = `linear-gradient(90deg, rgba(${lightVibrant}) 0%, rgba(${vibrant}) 10%, rgba(${darkVibrant}) 30%, rgba(${lightMuted}), rgba(${muted}) 65%, rgba(${darkMuted}) 100%)`

  //   // background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(246,133,133,1) 16.3%, rgba(172,131,241,1) 90% );

  //   // const backgroundRule = `linear-gradient(90deg, rgba(${lightMuted}) 0%, rgba(${darkVibrant}) 30%, rgba(${muted}) 65%, rgba(${darkMuted}) 100%)`

  const backgroundRule = `linear-gradient(to right, rgb(${lightVibrant}), rgb(${muted}), rgb(${darkMuted}))`

  box.style.background = backgroundRule
}

const setBoxColor = async (imgSrc, box) => {
  // const result = await test.colors(imgSrc.src)
  // console.log(result)
  //   var swatches = await vibrant.getPalette();
  //   console.log(lazyImage, swatches)
  // Vibrant.from(imgSrc).getPalette(function(err, palette) {
  //   console.log(palette, err)
  //   const vibrant = palette['Vibrant'].getRgb()
  //   const lightVibrant = palette['LightVibrant'].getRgb()
  //   const darkVibrant = palette['DarkVibrant'].getRgb()
  //   const muted = palette['Muted'].getRgb()
  //   const darkMuted = palette['DarkMuted'].getRgb()
  //   const lightMuted = palette['LightMuted'].getRgb()
  //   // const backgroundRule = `linear-gradient(90deg, rgba(${lightVibrant}) 0%, rgba(${vibrant}) 10%, rgba(${darkVibrant}) 30%, rgba(${lightMuted}), rgba(${muted}) 65%, rgba(${darkMuted}) 100%)`
  //   // background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(246,133,133,1) 16.3%, rgba(172,131,241,1) 90% );
  //   // const backgroundRule = `linear-gradient(90deg, rgba(${lightMuted}) 0%, rgba(${darkVibrant}) 30%, rgba(${muted}) 65%, rgba(${darkMuted}) 100%)`
  //   const backgroundRule = `linear-gradient(to right, rgb(${darkVibrant}), rgb(${muted}), rgb(${darkMuted}))`
  //   box.style.background = backgroundRule
  // });
}

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
            const dataSrc = lazyImage.dataset.src

            lazyImage.crossOrigin = ''
            lazyImage.src = dataSrc

            // lazyImage.addEventListener('load', async function () {
            //   var vibrant = new Vibrant(lazyImage);

            //   var swatches = await vibrant.getPalette();
            //   console.log(lazyImage, swatches)

            //     // for (var swatch in swatches){
            //     //     if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
            //     //       console.log(swatch, swatches[swatch].getHex())
            //     //     }
            //     // }
            //     imgParent.classList.add('lazy-loaded')
            // });

            lazyImage.onload = function() {
              setBgColor(this, imgParent)
              this.removeAttribute('data-src')
              imgParent.classList.add('lazy-loaded')
            }

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
