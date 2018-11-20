const { css_modules, postcss } = require('../package.json').configuration

module.exports = {
  test: /.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        // ...(css_modules && { modules: true, localIdentName: '[name]__[hash:base64:8]' }), 
        // ...(postcss && { importLoaders: 1 })
      }
    },
    // ...(postcss && 'postcss-loader')
  ]
}