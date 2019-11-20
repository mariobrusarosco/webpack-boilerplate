// Vendors
import { pathOr } from 'ramda'
// CONSTANTS
const { YOUR_CONSTANT } = APP

const initialState = []

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return [...state]
    default:
      return state
  }
}

export default exampleReducer
