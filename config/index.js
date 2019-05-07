// Impor .env

const options = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const appConfig = () => {
  console.log('appConfig--------------------------------', process.env.NODE_ENV)
  return {
    ...options[process.env.NODE_ENV],
    ...require('./common')
  }
}

module.exports = appConfig
