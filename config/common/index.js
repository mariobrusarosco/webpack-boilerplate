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
    LOS_POLLOS: 'los-pollos',
    CAR_WASH: 'car-wash'
  },
  API_MAPPER: {},
  E2E: {
    HEADER: generateShortHash(),
    HOME: generateShortHash(),
    LOS_POLLOS_PAGE: generateShortHash(),
    CAR_WASH_PAGE: generateShortHash()
  },
  UNIT: {
    LISTING_STATUS: 'active'
  },
  ERRORS: { ...errorsMap }
}

module.exports = commonConfiguration
