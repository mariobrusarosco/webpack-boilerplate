const path = require('path')
const webpack = require('webpack')

// Configuration Files
const cssConfiguration = require('./css.configuration')
const imageConfiguration = require('./image.configuration')
const fontConfiguration = require('./font.configuration')

// Third Party Plugins
const htmlWebpack = require('html-webpack-plugin')
const cleanWebpack = require('clean-webpack-plugin')

module.exports = () => ({
    // entry: './src/index.js',
    // In case of multiple entry points
    entry: {
        'main': './src/index.js',
        'second': './src/index-second.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new htmlWebpack({
          title: "Webpack Boilerplate: ",
        }),
        new cleanWebpack(['dist'], {
          root: process.cwd()
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
})