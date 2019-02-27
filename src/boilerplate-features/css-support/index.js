import './css-support.css'
import { generateBox } from '../utils'

const markup = `
  <div class="box">
    <h2>CSS Support</h2>
    <h3 class="text-styled">This text must be on blue rgb(0, 0, 255)</h3>
  </div>
`
generateBox('css-support', markup)
