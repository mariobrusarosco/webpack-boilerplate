// Api Helpers
import defaultAPI from 'api/default'

// Vendors
import { pathOr } from 'ramda'

// Utils
import evaluateProperties from 'utils/evaluateProperties'
import paginate from 'utils/paginate'

// CONSTANTS
const { BUSINESS, ERRORS } = APP || global.APP

export const fetchSomeData = () => async dispatch => {
  // try {
    const response = await defaultAPI.get('/comments')
    const data = pathOr({}, ['data'], response)
    // Dispatch them into the store
    dispatch({
      type: 'FETCH_SOME_DATA',
      data
    })

    return data
  // } catch (fetchError) {
    // console.error(fetchError)

    // throw {
    //   src: 'fetchingProperties',
    //   errorID: 'A01',
    //   ...pathOr(fetchError, ['response'], fetchError)
    // }
  // }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}

export const setAppCriticalError = errorStructure => {
  console.log('setAppCriticalError' , errorStructure)
  // debugger
  // const e = error
  // const { status, statusText, src, errorID } = error

  // const testing = error

  return {
    type: 'APP_HAS_CRITICAL_ERROR',
    errorStructure,
  //   testing
  //   // userMessage: ERRORS[errorID],
  //   // errorDescription: { src, errorID, status, statusText }
  }
}
