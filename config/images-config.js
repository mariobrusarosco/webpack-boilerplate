module.exports = {
  test: /.(png|gif|jpg|jpeg)$/,
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
