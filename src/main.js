// Enables Hot Module Replacement
require('webpack-hot-middleware/client?reload=true')
if (module.hot)
	module.hot.accept()

import './index.html'
import './styles/test.css'
import './components/es-testing'


console.log(2);
