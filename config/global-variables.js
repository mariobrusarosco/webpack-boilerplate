const webpack = require("webpack")

module.exports = new webpack.DefinePlugin({
  'NODE_ENV': { 
    'production': !!process.env.production,
    'development': !!process.env.development
  },
  'APP_NAME': JSON.stringify(process.env.APP_NAME)
})
