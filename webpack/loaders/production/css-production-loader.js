module.exports = {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          // modules: true, 
          // localIdentName: '[name]__[hash:base64:8]', 
          }
      },
    ]
  }