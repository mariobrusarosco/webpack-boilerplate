const CleanWebpack = require('clean-webpack-plugin')

module.exports = () =>
	new CleanWebpack(['dist'], {
		root: process.cwd()
	})
