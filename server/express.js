const express = require('express'),
  path = require('path'),
  webpack = require('webpack'),
  config = require('../config/webpack.dev'),
  compiler = webpack(config),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  staticMiddleWare = express.static('dist')

const server = express()
// Runs our loaders and plugin using webpack
server.use(webpackDevMiddleware(
  compiler,
  config.devServer
))
// Enables Hot Module Reload
server.use(webpackHotMiddleware(compiler))
// Servers the result stored in a 'dist' folder
server.use(staticMiddleWare)

server.listen(8080, () => {
  console.log('Server listening at 8080');
})
