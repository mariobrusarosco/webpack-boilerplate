const commonLoaders = [
  { test: /\.tsx?$/, use: ['ts-loader', 'eslint-loader'], exclude: /node_modules/ },
  {
    test: /\.(ttf|woff|woff2|eot|otf|svg)$/,
    use: ['file-loader']
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    use: [
      {
        loader: 'image-trace-loader',
        options: {
          color: '#d2d2d2'
        }
      },
      {
        loader: 'url-loader',
        options: {
          limit: 15000, // Convert images < 8kb to base64 strings
          name: 'images/[name].[ext]'
        }
      }
    ]
  }
]

module.exports = commonLoaders
