module.exports = {
  test: /\.html$/,
  include: /src/,
  use: [
    {
      loader: "html-loader"
    }
  ]
}
