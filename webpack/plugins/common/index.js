const HtmlWebpackPlugin = require('./html-webpack.plugin')
const CleanWebpack = require('./clean-webpack.plugin')

const commonPlugins = [
    HtmlWebpackPlugin(),
		CleanWebpack(),
]

module.exports = commonPlugins
