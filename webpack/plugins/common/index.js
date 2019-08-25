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
const config = require('../../../config')

const commonPlugins = env => [
  new FaviconsWebpackPlugin({
    logo: path.resolve('src/assets/favicon-16x16.png'),
    cache: true,
    inject: true
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
    APP: JSON.stringify(config())
  }),
  new WebpackPwaManifest({
    name: 'Grupo ZAP',
    start_url: 'index.html?origin=pwa',
    display: 'standalone',
    short_name: 'Grupo ZAP',
    inject: true,
    description: 'Grupo ZAP. Abrindo caminhos para o mercado imobiliário no Brasil!',
    background_color: '#c8d419',
    theme_color: '#00ac95',
    scope: '.',
    crossorigin: null,
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
      }
    ]
  }),
  new InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'sw.js'
  }),
  new StyleLintPlugin()
]

module.exports = commonPlugins
