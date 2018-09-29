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



// React
// import './webpack-tests/react/app.js';

// import './styles/main.scss';
console.log(NODE_ENV);

console.log(`Environment: ${NODE_ENV.production ? 'production' : 'development'}`);
console.log(`App name: ${APP_NAME}`);
