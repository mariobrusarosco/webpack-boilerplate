// Api Helpers
import githubApi from 'api/github'

// Vendors
import { pathOr } from 'ramda'

// Utils

// CONSTANTS
const { ERRORS } = APP

export const fetchUser = username => async dispatch => {
  try {
    const response = await githubApi.get(`/users/${username}`)
    const rawData = pathOr({}, ['data'], response)

    dispatch({ type: 'FETCH_USER' })

    return rawData
  } catch (e) {
    dispatch(
      setAppCriticalError({
        error: e,
        additionalInfo: {
          source: 'fetchingUser',
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

export const resetAppCriticalError = () => {
  return {
    type: 'RESET_APP_CRITICAL_ERROR'
  }
}
