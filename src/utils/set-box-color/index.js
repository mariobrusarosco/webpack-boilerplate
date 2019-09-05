import * as Vibrant from 'node-vibrant'

const setBoxColor = async (img, box) => {
  const vib = new Vibrant(img)
  const swatches = await vib.getPalette()

  const vibrant = swatches['Vibrant'].getRgb()
  const lightVibrant = swatches['LightVibrant'].getRgb()
  const darkVibrant = swatches['DarkVibrant'].getRgb()
  const muted = swatches['Muted'].getRgb()
  const darkMuted = swatches['DarkMuted'].getRgb()
  const lightMuted = swatches['LightMuted'].getRgb()

  const backgroundRule = `linear-gradient(to right, rgb(${lightVibrant}), rgb(${muted}), rgb(${darkMuted}))`

  box.style.background = backgroundRule
}

export default setBoxColor
