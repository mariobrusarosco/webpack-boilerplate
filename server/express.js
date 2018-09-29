const express = require('express'),
  path = require('path'),
  PORT = process.env.PORT || 8080,
  webpack = require('webpack'),
  config = require('../config/webpack.dev'),
  compiler = webpack(config),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  staticMiddleWare = express.static('dist')

const server = express(),
  isProd = process.env.production

if (!isProd) {
  // Runs our loaders and plugin using webpack
  server.use(webpackDevMiddleware(
    compiler,
    config.devServer
  ))
  // Enables Hot Module Reload
  server.use(webpackHotMiddleware(compiler))
}

// Servers the result stored in a 'dist' folder
// server.use(staticMiddleWare)

// Servers the result stored in a 'dist' folder with gzip
const expressGzip = require('express-static-gzip')
server.use(expressGzip('dist'))

server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
})
