const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')

const commonPlugins = [
  new HtmlWebpack({
		template: path.resolve('src', 'index.html')
  }),
  new CleanWebpack(['dist'], {
		root: process.cwd()
	})
]

module.exports = commonPlugins
