const path = require('path')

// Configuration Files
const cssConfiguration = require('./css.configuration')
const imageConfiguration = require('./image.configuration')
const fontConfiguration = require('./font.configuration')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      cssConfiguration,
      imageConfiguration,
      fontConfiguration,
    ]
  }
}