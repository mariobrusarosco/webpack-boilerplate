const path = require('path'),
  htmlConfig = require('./html-config'),
  imagesConfig = require('./images-config'),
  plainCSSConfig = require('./plain-css-config'),
  webpack = require('webpack'),
  HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      plainCSSConfig,
      imagesConfig,
      htmlConfig
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve("./src/index.html")
    })
  ]
}
