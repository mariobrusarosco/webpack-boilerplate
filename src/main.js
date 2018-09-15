// require('babel-runtime/generator')

require('./test.css')
require('./index.html')

const arrowFunction = async () => {
  await console.log(1);
  console.log(102);
}

arrowFunction()
