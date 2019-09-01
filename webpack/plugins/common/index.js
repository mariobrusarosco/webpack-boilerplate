// Vendors and Libs
import webpack from 'webpack'
import { resolve } from 'path'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import HtmlWebpack from 'html-webpack-plugin'
import CleanWebpack from 'clean-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { InjectManifest } from 'workbox-webpack-plugin'

// Project's configuration
import config from '../../../src/app-configuration.json'

const commonPlugins = () => [
  new HtmlWebpack({
    template: resolve('src', 'index.html'),
    favicon: resolve('src/assets/images/icon.png')
  }),
  new FaviconsWebpackPlugin({
    logo: resolve('src/assets/images/icon.png'),
    mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
    devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
    favicons: {
      appName: 'my-app',
      appDescription: 'My awesome App',
      developerName: 'Me',
      developerURL: null, // prevent retrieving from the nearest package.json
      background: '#ddd',
      theme_color: '#333',
      icons: {
        coast: false,
        yandex: false
      }
    }
    // logo: path.resolve('src/assets/images/icon.png'),
    // cache: true,
    // inject: true,
    // favicons: {
    //   appName: 'Boilerplate',
    //   appShortName: 'Front End Boilerplate',
    //   appDescription: 'A Boilerplate for Front End Development - Mario Brusarosco',
    //   start_url: '/index.html?origin=pwa',
    //   scope: '/',
    //   display: 'standalone',
    //   orientation: 'any', // 'landscape' or 'portrait' doesn't allow switch rotation... also 'portrait-primary' doesn't allow 180deg switch orientation
    //   theme_color: '#00ac95',
    //   background: '#c8d419',
    //   appleStatusBarStyle: '#00ac95',
    //   dir: 'auto',
    //   lang: 'pt-BR',
    //   crossorigin: null,
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     favicons: true
    //   }
    // }
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
  //       src: resolve('src/assets/images/icon.png'),
  //       sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
  //     }
  //   ]
  // }),
  new InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'sw.js',
    exclude: [/\.map$/, /^manifest.*\.js$/]
  }),
  new StyleLintPlugin()
]

module.exports = commonPlugins
