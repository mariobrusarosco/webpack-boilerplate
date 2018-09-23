const webpack = require("webpack")

module.exports = new webpack.DefinePlugin({
  'NODE_ENV': JSON.stringify(process.env.ENV),
  'APP_NAME': JSON.stringify(process.env.APP_NAME)
})
