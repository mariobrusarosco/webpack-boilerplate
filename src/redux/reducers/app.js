const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...action.payload,
        ...state
      }

    default:
      return state
  }
}

export default appReducer
