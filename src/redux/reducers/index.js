import { combineReducers } from 'redux'

// Reducers
import appReducer from './app'
import propertiesReducer from './properties'

const rootReducer = combineReducers({
  App: appReducer,
  Properties: propertiesReducer
})

export default rootReducer
