const environments = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const activeENV = environments[process.env.NODE_ENV]

const appConfig = () => {
  console.log(process.env.NODE_ENV)

  return {
    ...activeENV,
    ...require('./common') // Import everything data that is common no matter which Environment
  }
}

module.exports = appConfig
