// Project's Package JSON
import packageJSON from '../../package.json'

// ERRORS MAP
import errorsMap from './errorsMap'

const commonConfiguration = {
  APP_NAME: 'Boilerplate',
  ENVIRONMENT: process.env.NODE_ENV,
  VERSION: packageJSON.version,
  ROOT_URL: '/',
  API: {
    GITHUB: 'https://api.github.com/'
  },
  ERRORS: { ...errorsMap },
  TOKENS: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
}

module.exports = commonConfiguration
