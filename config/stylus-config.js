const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.styl$/,
  include: /src/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      },
    },
    'postcss-loader',
    'stylus-loader'
  ]
}
