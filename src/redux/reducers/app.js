// Vendors
import { pathOr } from 'ramda'

const initialState = {
  appIsLoaded: false,
  appCriticalError: {
    status: false,
    error: '',
    userMessage: '',
    errorDescription: ''
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_IS_LOADED':
      return {
        ...state,
        appIsLoaded: true
      }
    case 'APP_HAS_CRITICAL_ERROR':
      const { stack, message } = pathOr('', ['errorStructure'], action)

      return {
        ...state,
        appCriticalError: {
          status: true,
          error: {
            stack, message
          }
        }
      }

    default:
      return state
  }
}

export default appReducer
