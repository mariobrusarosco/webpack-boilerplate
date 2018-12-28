const path = require('path')

// Loaders
const commonLoaders = require('../loaders/common')
const productionLoaders = require('../loaders/production')

// Plugins
const commonPlugins = require('../plugins/common')

// Webpacks's Configurations
const commonConfig = require('./common.config')
const productionConfig = () => ({
  mode: 'production',
  // devtool: 'eval-source-map',
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
})

module.exports = Object.assign(commonConfig() , productionConfig())