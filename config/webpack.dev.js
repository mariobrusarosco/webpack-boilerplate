const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

// Configuration files
const globalVariables = require('./global-variables')
const globalVendors = require('./global-vendors')
const babelConfig = require('./babel-config')
const cssConfig = require('./pure-css-config')
const scssConfig = require('./scss-config')
const sassConfig = require('./sass-config')
const stylusConfig = require('./stylus-config')
const imagesConfig = require('./images-config')
const markdownConfig = require('./markdown-config')

const devConfig = env => ({
  entry: {
    main: [
      "@babel/polyfill",
      "webpack-hot-middleware/client",
      "./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  devServer : {
    contentBase: 'dist',
    hot: true,
    overlay: false,
    historyApiFallback: true
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
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'Test'
    }),
    new webpack.HotModuleReplacementPlugin(),
    globalVariables,
    globalVendors
  ]
})

module.exports = devConfig()
