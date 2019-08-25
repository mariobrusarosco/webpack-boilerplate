// Project's Package JSON
const packageJSON = require('../../package.json')

// ERRORS MAP
const errorsMap = require('./errorsMap')

const commonConfiguration = {
  APP_NAME: 'Zap Challenge',
  VERSION: packageJSON.version,
  ROOT_URL: '/',
  API: {
    API_ROOT: 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/'
  },
  BUSINESS: {
    VIVA_REAL: 'vivaReal',
    ZAP: 'zap'
  },
  API_MAPPER: {
    PROPERTY_CARD: {
      BUSINESS_TYPE: { sale: 'venda', rental: 'aluguel' }
    }
  },
  E2E: {
    // This are just examples. In Real World Case we must use random hashes!!
    HOME: 'AD4_sdrpaaegp',
    HEADER: 'araDk_lKOpq',
    VIVA_REAL_PAGE: 'AADm+k_lASDf',
    ZAP_PAGE: '4ad__24kpfo'
  },
  UNIT: {
    LISTING_STATUS: 'active'
  },
  ERRORS: { ...errorsMap }
}

module.exports = commonConfiguration
