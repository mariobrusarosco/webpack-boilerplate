const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')

const commonPlugins = [
  new HtmlWebpack({
    title: "Webpack Boilerplate: ",
  }),
  new CleanWebpack(['dist'], {
		root: process.cwd()
	})
]

module.exports = commonPlugins
