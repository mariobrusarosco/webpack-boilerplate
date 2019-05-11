const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const productionLoaders = [
  {
    test: /\.s?css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          // localIdentName: '[name]__[hash:base64:8]',
        }
      },
      {
        loader: "sass-loader",
        options: {
            includePaths: ["./src/styles/variables.scss"]
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/styles/variables.scss']
        },
      }
    ]
  },
]

module.exports = productionLoaders
