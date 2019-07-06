const path = require('path')

const developmentConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    // alias: {
    //   "imagesPath": path.resolve('src','assets','images')
    // },
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('src', 'boilerplate-features')
    ]
  }
})

module.exports = developmentConfig
