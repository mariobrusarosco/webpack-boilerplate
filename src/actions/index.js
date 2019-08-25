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
  try {
    const response = await defaultAPI.get('/comments')

    // Dispatch them into the store
    dispatch({
      type: 'FETCH_SOME_DATA',
      response
    })
  } catch (fetchError) {
    console.error(fetchError)

    throw {
      src: 'fetchingSomeData',
      errorID: 'A01',
      ...pathOr(fetchError, ['response'], fetchError)
    }
  }
}


// export const fetchSomeData = () => async dispatch => {
//   try {
//     const data = await defaultAPI.get('/comments')
//     console.log({data})
//     // Dispatch them into the store
//     // dispatch({
//     //   type: 'FETCH_PROPERTIES',
//     //   all: allEvaluatedProperties,
//     //   [ZAP]: paginatedZap,
//     //   [VIVA_REAL]: paginatedVivaReal
//     // })
//   } catch (fetchError) {
//     console.error(fetchError)

//     throw {
//       src: 'fetchingProperties',
//       errorID: 'A01',
//       ...pathOr(fetchError, ['response'], fetchError)
//     }
//   }
// }

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}

export const setAppCriticalError = errorDescription => {
  const { status, statusText, src, errorID } = errorDescription

  return {
    type: 'APP_HAS_CRITICAL_ERROR',
    userMessage: ERRORS[errorID],
    errorDescription: { src, errorID, status, statusText }
  }
}
