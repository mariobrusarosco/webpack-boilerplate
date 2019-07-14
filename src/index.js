// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

console.log('APP Info', APP)

document.body.insertAdjacentHTML('afterbegin', `Starting Webpack: ${APP.VERSION}`)

// CSS support
// import 'css-support'

// Image support
// import 'images-support'

// Font support
// import 'fonts-support'

// Hot Module Replacement support
// import 'hmr-support'

//  Tree Shaking support
// import { treeShakingExample } from 'utils/tree-shaking.example'
// treeShakingExample()

// Code Splitting

/* Importing lodash in this entry point to check
 *  if Static Code Splitting optimization is working!!!
 */
// import _ from 'lodash'
// console.log(_.join(['main', 'entry', 'point, made with lodash!!!!!!']))

// import 'code-splitting-support'

// Resolving some absolute paths
// import 'resolving-paths-support'

// Babel and ES new features
// import 'babel-support'

// React support
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Store
import rootReducer from './redux/reducers'

const StoreEnhancer =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(rootReducer, StoreEnhancer(applyMiddleware(reduxThunk)))

// Components
import App from 'components/App'

// App Style Global
// import 'semantic-ui-css/semantic.min.css'
import './styles/app.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
