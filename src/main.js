// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

// WEBPACK FEATURES

// Pure class
import './webpack-tests/pure-css/pure-css.css'

// scss
import './webpack-tests/scss/scss.scss'

// sass
import './webpack-tests/sass/sass.sass'

// React
// import './webpack-tests/react/app.js';

// import './styles/main.scss';

console.log(`Environment: ${NODE_ENV}`);
console.log(`App name: ${APP_NAME}`);
