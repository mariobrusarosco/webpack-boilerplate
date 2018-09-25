const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const optimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const globalVariables = require('./globalVariables')
const cssConfig = require('./pure-css-config')
const scssConfig = require('./scss-config')

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
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      cssConfig,
      scssConfig,
      {
        test: /\.sass$/,
        use: [
          {
            loader: miniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: miniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
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
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'Test'
    }),
    new optimizeCSSAssets(),
    new miniCSSExtractPlugin({
      filename: "[name]-bundle-[hash:8].css"
    }),
    globalVariables
  ]
})

module.exports = prodConfig()
