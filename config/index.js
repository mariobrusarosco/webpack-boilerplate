// Impor .env

const options = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const appConfig = () => {
  console.log('appConfig--------------------------------', process.env.APP_ENVIRONMENT)
  return {
    ...options[process.env.APP_ENVIRONMENT],
    ...require('./common')
  }
}

module.exports = appConfig
