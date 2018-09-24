const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.scss$/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1
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
