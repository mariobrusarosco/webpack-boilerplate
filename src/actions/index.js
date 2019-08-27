// Api Helpers
import defaultAPI from 'api/default'

// Vendors
import { pathOr } from 'ramda'

// Utils
import evaluate from 'utils/evaluation'

// CONSTANTS
const { ERRORS, BUSINESS } = APP || global.APP
const { WALTER, JESSE } = BUSINESS

export const evaluateSomeData = data => {
  const evaluatedItems = evaluate(data)

  console.log({ evaluatedItems })

  return {
    type: 'EVALUATE_SOME_DATA',
    evaluation: evaluatedItems
  }
}

export const fetchSomeData = () => async dispatch => {
  try {
    const response = await defaultAPI.get('/photos')
    const data = pathOr({}, ['data'], response)

    dispatch({ type: 'FETCH_SOME_DATA' })

    return data
  } catch (e) {
    dispatch(
      setAppCriticalError({
        error: e,
        additionalInfo: {
          source: 'fetchingSomeData',
          errorID: 'A01',
          messageForUsers: ERRORS['A01']
        }
      })
    )
  }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}

export const setAppCriticalError = ({ error, additionalInfo }) => {
  const stack = pathOr(null, ['stack'], error)
  const message = pathOr(null, ['message'], error)

  return {
    type: 'APP_HAS_CRITICAL_ERROR',
    errorData: {
      stack,
      message,
      ...additionalInfo
    }
  }
}
