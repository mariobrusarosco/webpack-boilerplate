module.exports = {
  test: /.(png|jpg|jpeg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: "images/[name].[ext]"
      }
    }
  ]
}
