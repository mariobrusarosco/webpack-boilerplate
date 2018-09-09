module.exports = {
  test: /.scss$/,
  include: /src\/styles/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}
