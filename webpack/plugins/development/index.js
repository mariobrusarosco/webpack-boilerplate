const webpack = require('webpack')

const developmentPlugins = [
	new webpack.HotModuleReplacementPlugin()
]

module.exports = developmentPlugins
