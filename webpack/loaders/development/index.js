const developmentLoaders = [
  {
    test: /\.s?css$/,
    include: /src/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[hash:base64:8]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import 'variables';
          `,
          includePaths: ['./src/styles']
        }
      }
    ]
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    exclude: /src/,
    use: ['style-loader', 'css-loader']
  }
]

module.exports = developmentLoaders
