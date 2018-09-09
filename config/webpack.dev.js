const path = require('path'),
  webpack = require('webpack'),
  HTMLWebpackPlugin = require('html-webpack-plugin')

// WEBPACK CONFIGURATION PARTS
const plainCSS = require('./plain-css'),
  plainHTML = require('./plain-html'),
  images = require('./images')

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true
  },
  module: {
    rules: [
      plainCSS,
      plainHTML,
      images,
      {
        test: /.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      inject: false,
      template: path.resolve('src/index.html')
    })
  ]
}
