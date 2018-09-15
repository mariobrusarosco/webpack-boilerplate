// Setting up 'HMR'
require('webpack-hot-middleware/client')

if(module.hot) {
  module.hot.accept()
}


require('./test.css')
require('./index.html')

const arrowFunction = async () => {
  await console.log(1);
  console.log(10);
}

arrowFunction()
