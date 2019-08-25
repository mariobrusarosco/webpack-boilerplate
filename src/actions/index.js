// Api Helpers
import zapAPI from 'api/zap'

// Vendors
import { pathOr } from 'ramda'

// Utils
import evaluateProperties from 'utils/evaluateProperties'
import paginate from 'utils/paginate'

// CONSTANTS
const { BUSINESS, ERRORS } = APP || global.APP
const { ZAP, VIVA_REAL } = BUSINESS

export const fetchProperties = () => async dispatch => {
  try {
    const { data: allProperties } = await zapAPI.get('/sources/source-1.json')

    // Evaluate all Properties
    const evaluation = evaluateProperties(allProperties)
    const allEvaluatedProperties = pathOr([], ['all'], evaluation)
    const evaluatedZap = pathOr([], [ZAP], evaluation)
    const evaluatedViva = pathOr([], [VIVA_REAL], evaluation)

    // Paginate ZAP and VIVA REAL Properties
    const paginatedZap = paginate({
      array: evaluatedZap,
      itemsPerPage: 20,
      resultStructureAs: 'object'
    })

    const paginatedVivaReal = paginate({
      array: evaluatedViva,
      itemsPerPage: 20,
      resultStructureAs: 'object'
    })

    // Dispatch them into the store
    dispatch({
      type: 'FETCH_PROPERTIES',
      all: allEvaluatedProperties,
      [ZAP]: paginatedZap,
      [VIVA_REAL]: paginatedVivaReal
    })
  } catch (fetchError) {
    console.error(fetchError)

    throw {
      src: 'fetchingProperties',
      errorID: 'A01',
      ...pathOr(fetchError, ['response'], fetchError)
    }
  }
}

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
