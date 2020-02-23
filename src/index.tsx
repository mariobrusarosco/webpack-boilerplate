console.log('running typescript')

import { render } from 'react-dom'

// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

// Components
import App from './components/App/index'

render(<App />, document.querySelector('.app'))
