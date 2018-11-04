const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.scss$/,
  include: /src/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true
      },
    },
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
       includePaths: ["src/styles/config"]
     }
    }
  ]
}
