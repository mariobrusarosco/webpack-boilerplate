const path = require('path')
const webpack = require('webpack')

// Loaders
const commonLoaders = require('../loaders/common')
const productionLoaders = require('../loaders/production')

// Plugins
const commonPlugins = require('../plugins/common')


module.exports = {
  mode: 'production',
  // devtool: 'eval-source-map',
  // entry: './src/index.js',
  // In case of multiple entry points
  entry: {
    'main': './src/index.js',
    'second': './src/index-second.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  plugins: [
    ...commonPlugins,
  ],
  module: {
    rules: [
      ...commonLoaders,
      ...productionLoaders,
    ]
  },
}
