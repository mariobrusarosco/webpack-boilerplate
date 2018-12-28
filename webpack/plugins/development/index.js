const HmrPlugin = require('./hot-module-replacment.plugin')

const developmentPlugins = [
	HmrPlugin()
]

module.exports = developmentPlugins
