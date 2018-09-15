// Setting up 'HMR'
require('webpack-hot-middleware/client')

if(module.hot) {
  module.hot.accept()
}


// Plain CSS
import './test.css'
// Plain SCSS
import './test.scss'
// A basic HTML
import './index.html'
// Recent JS features
import './es-future'
// React
import './app'
