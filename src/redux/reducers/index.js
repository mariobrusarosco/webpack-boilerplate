import { combineReducers } from 'redux'

// Reducers
import appReducer from './app'
import exampleReducer from './example'

const rootReducer = combineReducers({
  app: appReducer,
  example: exampleReducer
})

export default rootReducer
