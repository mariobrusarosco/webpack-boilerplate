// Vendors
import { pathOr } from 'ramda'
//TODO understand the bug
// CONSTANTS
// const { BUSINESS } = APP || global.APP
// const { ZAP, VIVA_REAL } = BUSINESS

const initialState = {
  // all: [],
  // [ZAP]: [],
  // [VIVA_REAL]: []
}

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROPERTIES':
      const { all, zap, vivaReal } = action
      // const zapProperties = pathOr({}, ['zap'], action)
      // const vivaRealProperties = pathOr({}, ['vivaReal'], action)
      // const allProperties = pathOr({}, ['all'], action)

      return {
        ...state,
        all,
        zap,
        vivaReal
        // [all: allProperties,
        // [ZAP]: zapProperties,
        // [VIVA_REAL]: vivaRealProperties
      }
    default:
      return state
  }
}

export default propertiesReducer
