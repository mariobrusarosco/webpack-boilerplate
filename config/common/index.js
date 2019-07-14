// Project's Package JSON
const packageJSON = require('../../package.json')

const commonConfiguration = {
  APP_NAME: 'Code Notes',
  VERSION: packageJSON.version,
  ROOT_URL: '/'
}

module.exports = commonConfiguration
