const path = require('path')

// Configuration Files
const cssConfiguration = require('./css.configuration')
const imageConfiguration = require('./image.configuration')
const fontConfiguration = require('./font.configuration')

// Third Party Plugins
const htmlWebpack = require('html-webpack-plugin')
const cleanWebpack = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  // entry: './src/index.js',
  // In case of multiple entry points
  entry: {
    'main': './src/index.js',
    'second': './src/index-optional.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: '../dist'
  },
  plugins: [
    new htmlWebpack({
      title: "Webpack Boilerplate: ",
    }),
    new cleanWebpack(['dist'], {
      root: process.cwd()
    })
  ],
  module: {
    rules: [
      cssConfiguration,
      imageConfiguration,
      fontConfiguration,
    ]
  },
}