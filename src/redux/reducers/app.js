const initialState = {
  appIsLoaded: false,
  appCriticalError: {
    status: false,
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
        // appCriticalError: {}
        // or JUST RETURN A NEW STATE WIHTOUT MERGING THE LAST STATE
        // appIsLoaded: true
      }
    case 'APP_HAS_CRITICAL_ERROR':
      const { userMessage, errorDescription } = action

      return {
        ...state,
        appCriticalError: {
          status: true,
          userMessage,
          errorDescription
        }
      }

    default:
      return state
  }
}

export default appReducer
