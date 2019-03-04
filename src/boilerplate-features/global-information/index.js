import { generateBox } from '../utils'

// const { APP_NAME } = APPLICATION

const markup = `
  <div class='box'>
    <h2>Global Information Support</h2>
    <p>
      All Environment Variables passed via <strong>.env</strong> file are
      avaliable to you via <strong>APPLICATION</strong> constant.
      In any module of your App
    </p>
    <p>Example: <strong data-info='global-information'>${APP_NAME}</strong></p>
  </p>
`

generateBox('global-information-support', markup)

