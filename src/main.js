// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

// WEBPACK FEATURES

// Pure class
import './webpack-tests/pure-css/pure-css.css'

// scss
import './webpack-tests/scss/scss.scss'

// stylus
import './webpack-tests/stylus/stylus.styl'

// sass
import './webpack-tests/sass/sass.sass'

// ES future syntax
import './webpack-tests/js-future'

// React
import './webpack-tests/react/app.js';

console.log(`Environment: ${NODE_ENV.production ? 'production' : 'development'}`);
console.log(`App name: ${APP_NAME}`);
