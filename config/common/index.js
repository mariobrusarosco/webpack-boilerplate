// Project's Package JSON
import packageJSON from '../../package.json'

// Utils
import generateShortHash from '../../src/utils/generate-short-hash'

// ERRORS MAP
import errorsMap from './errorsMap'

const commonConfiguration = {
  APP_NAME: 'Boilerplate',
  VERSION: packageJSON.version,
  ROOT_URL: '/',
  API: {
    API_ROOT: 'https://jsonplaceholder.typicode.com/'
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
    HOME: generateShortHash(),
    HEADER: generateShortHash(),
    VIVA_REAL_PAGE: generateShortHash(),
    ZAP_PAGE: generateShortHash()
  },
  UNIT: {
    LISTING_STATUS: 'active'
  },
  ERRORS: { ...errorsMap }
}

module.exports = commonConfiguration
