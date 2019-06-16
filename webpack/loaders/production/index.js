const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const productionLoaders = [
  {
    test: /\.s?css$/,
    include: /src/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
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
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  }
]

module.exports = productionLoaders
