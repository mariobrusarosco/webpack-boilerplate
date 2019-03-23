import { combineReducers } from 'redux'

// Reducers
import appReducer from './app'

const rootReducer = combineReducers({
  App: appReducer
})

export default rootReducer
