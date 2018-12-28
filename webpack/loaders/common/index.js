const commonLoaders = [
  {
    test: /\.(ttf|woff|woff2|oet|otf)$/,
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    use: [
      'file-loader'
    ]
  },
]

module.exports = commonLoaders