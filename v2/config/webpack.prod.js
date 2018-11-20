const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const optimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const compressionPlugin = require('compression-webpack-plugin')
const brotliPlugin = require('brotli-webpack-plugin')

// Configuration files
const globalVariables = require('./global-variables')
const globalVendors = require('./global-vendors')
const resolveConfig = require('./resolve-config')
const babelConfig = require('./babel-config')
const cssConfig = require('./pure-css-config')
const scssConfig = require('./scss-config')
const sassConfig = require('./sass-config')
const stylusConfig = require('./stylus-config')
const imagesConfig = require('./images-config')
const markdownConfig = require('./markdown-config')

const prodConfig = env => ({
  entry: {
    // main: ["./src/main.js"]
    main: ["@babel/polyfill", "./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      babelConfig,
      cssConfig,
      scssConfig,
      sassConfig,
      stylusConfig,
      imagesConfig,
      markdownConfig,
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'Webpack Boilterplate'
    }),
    new optimizeCSSAssets(),
    new miniCSSExtractPlugin({
      filename: '[name]-bundle-[hash:8].css'
    }),
    globalVariables,
    globalVendors,
    new compressionPlugin({
      algorithm: 'gzip'
    }),
    new brotliPlugin()
  ],
  ...resolveConfig,
})

module.exports = prodConfig()
