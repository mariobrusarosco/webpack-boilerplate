module.exports = {
  test: /\.md$/,
  use: [
    'html-loader',
    'markdown-loader'
  ]
}