module.exports = {
  test: /.css$/,
  include: /src/,
  use: [
    'style-loader',
    'css-loader'
  ]
}
