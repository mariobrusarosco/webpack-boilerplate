const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.css$/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      },
    },
    'postcss-loader'
  ]
}
