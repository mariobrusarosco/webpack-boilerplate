// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

// WEBPACK FEATURES

// Pure class
import 'pure-css/pure-css.css'

// scss
import 'scss/scss.scss'

// stylus
import 'stylus/stylus.styl'

// sass
import 'sass/sass.sass'

// ES future syntax
import 'js-future'

// React
import 'react/app.js';

console.log(`Environment: ${NODE_ENV.production ? 'production' : 'development'}`);
console.log(`App name: ${APP_NAME}`);
