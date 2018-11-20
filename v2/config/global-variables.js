const webpack = require("webpack")

module.exports = new webpack.DefinePlugin({
  'APP_NAME': JSON.stringify(process.env.APP_NAME)
})
