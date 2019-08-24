const appConfig = () => {
  console.log(`Configuration loaded for : ${process.env.NODE_ENV}`)

  return {
    ...require(`./${process.env.NODE_ENV}`),
    ...require('./common') // Import everything data that is common no matter which Environment
  }
}

module.exports = appConfig
