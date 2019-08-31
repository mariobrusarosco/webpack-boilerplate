// Vendors and Libs
const webpack = require('webpack')
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpack = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')

// Project's configuration
import config from '../../../src/app-configuration.json'

const commonPlugins = () => [
  new FaviconsWebpackPlugin({
    logo: path.resolve('src/assets/images/icon.png'),
    cache: true,
    inject: true,
    favicons: {
      appName: 'Boilerplate',
      appShortName: 'Front End Boilerplate',
      appDescription: 'A Boilerplate for Front End Development - Mario Brusarosco',
      start_url: '/index.html?origin=pwa',
      scope: '/',
      display: 'standalone',
      orientation: 'any', // 'landscape' or 'portrait' doesn't allow switch rotation... also 'portrait-primary' doesn't allow 180deg switch orientation
      theme_color: '#00ac95',
      background: '#c8d419',
      appleStatusBarStyle: '#00ac95',
      dir: 'auto',
      lang: 'pt-BR',
      crossorigin: null,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        windows: true
      }
    }
  }),
  new HtmlWebpack({
    template: path.resolve('src', 'index.html')
  }),
  new CleanWebpack(['dist'], {
    root: process.cwd()
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new webpack.DefinePlugin({
    APP: JSON.stringify(config)
  }),
  // new WebpackPwaManifest({
  //   inject: true,
  //   name: 'Boilerplate',
  //   short_name: 'Front End Boilerplate',
  //   start_url: '/index.html?origin=pwa',
  //   scope: '.',  // '.' means all files inside the 'src' folder
  //   display: 'standalone',
  //   orientation: 'any',  // 'landscape' or 'portrait' doesn't allow switch rotation... also 'portrait-primary' doesn't allow 180deg switch orientation
  //   theme_color: '#00ac95',
  //   description: 'A Boilerplate for Front End Development - Mario Brusarosco',
  //   background_color: '#c8d419',
  //   dir: 'ltr',
  //   lang: 'pt-BR',
  //   crossorigin: null,
  //   icons: [
  //     {
  //       src: path.resolve('src/assets/icon.png'),
  //       sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
  //     }
  //   ]
  // }),
  new InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'sw.js'
  }),
  new StyleLintPlugin()
]

module.exports = commonPlugins
