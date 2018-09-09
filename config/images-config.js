module.exports = {
  test: /.(png|jpg|jpeg)$/,
  include: /src/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: "images/[name].[ext]"
      }
    }
  ]
}
