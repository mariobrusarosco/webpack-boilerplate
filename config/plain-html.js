module.exports = {
  test: /.html$/,
  include: /src/,
  use: [
    // {
    //   loader: 'file-loader', // insert it into a new and separeted .html file
    //   options: {
    //     name: '[name].html'
    //   },
    // },
    // 'extract-loader', // extract the html
    {
      loader: 'html-loader',  // Identify the html
      options: {
        attrs: ["img:src"]
      }
    }
  ]
}
