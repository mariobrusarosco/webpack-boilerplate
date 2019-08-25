// Vendors
import { pathOr } from 'ramda'
// CONSTANTS
const { YOUR_CONSTANT } = APP || global.APP

const initialState = {}

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SOME_DATA':
      const data = pathOr({}, ['data'], action)

      return {
        ...state,
        ...data
      }
    default:
      return state
  }
}

export default exampleReducer
