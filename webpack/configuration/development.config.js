const path = require('path')

// Loaders
const commonLoaders = require('../loaders/common')
const developmenLoaders = require('../loaders/development')

// Plugins
const commonPlugins = require('../plugins/common')
const developmentPlugins = require('../plugins/development')

// Webpacks's Configurations
const commonConfig = require('./common.config')

const developmentConfig = () => ({
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].development.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    hot: true,
  },
  plugins: [
		...commonPlugins,
		...developmentPlugins,
  ],
  module: {
    rules: [
      ...commonLoaders,
      ...developmenLoaders,
    ]
  },
})


module.exports = Object.assign(commonConfig() , developmentConfig())