import '../css-support/css-support.css'
import Heisenberg from 'assets/images/breaking-bad.jpg'
import Logo from 'assets/images/logo.svg'
import { generateBox } from '../utils'

const markup = `
  <div class="box image-via-js">
    <h2>Image Support</h2>
    <h3>This Image was added via JS's 'import'</h3>
    <img id="image-via-js" src="${Heisenberg}" alt="Image Via JS" />
  </div>
  <div class="box image-via-css">
    <h3>This Image was added via CSS's 'url()'</h3>
    <div id="image-via-css" class="test-image-holder"></div>
  </div>
  <div class="box">
    <h3>SVG</h3>
    <img class="image-svg" src="${Logo}" alt="Logo" />
</div>
`
generateBox('images-support', markup)
