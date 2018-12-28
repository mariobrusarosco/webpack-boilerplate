const path = require('path')
const webpack = require('webpack')

// Loaders
const commonLoaders = require('../loaders/common')
const developmenLoaders = require('../loaders/development')

// Plugins
const commonPlugins = require('../plugins/common')
const developmentPlugins = require('../plugins/development')

module.exports = () => ({
  mode: 'development',
  devtool: 'eval-source-map',
  // entry: './src/index.js',
  // In case of multiple entry points
  entry: {
    'main': './src/index.js',
    'second': './src/index-second.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    hot: true,
  },
  plugins: [
		...commonPlugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      ...developmenLoaders,
      ...commonLoaders,
    ]
  },
})
