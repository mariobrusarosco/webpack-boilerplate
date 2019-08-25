const environments = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const activeENV = environments[process.env.NODE_ENV] || {}

console.log(`environment: ${process.env.NODE_ENV}`)

const appConfig = () => {
  return {
    ...activeENV,
    ...require('./common') // Import everything that is common to all environments
  }
}

module.exports = appConfig
