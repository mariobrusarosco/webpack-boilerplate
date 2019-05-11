const developmentLoaders = [
  {
    test: /\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          // localIdentName: '[name]__[hash:base64:8]',
        }
      },
      "sass-loader",
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/styles/variables.scss']
        },
      },
    ]
  },
]

module.exports = developmentLoaders
