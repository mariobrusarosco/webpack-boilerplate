import '../css/css-support.css'
import Heisenberg from '../images/breaking-bad.jpg'

const markup = `
  <div class="box image-via-js">
    <h2>Image's Support</h2>
    <h3>This Image was added via JS's 'import'</h3>
    <img src="${Heisenberg}" alt="Image Via JS" />
  </div>
  <div class="box image-via-css">
    <h2>This Image was added via CSS's 'url()'</h2>
    <div class="test-image-holder"></div>
  </div>
`

const container = document.createElement('div')
  container.classList.add('images-support')
  container.innerHTML = markup

document.body.append(container)