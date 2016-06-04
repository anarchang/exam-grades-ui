import { combineReducers } from 'redux-immutable'
import examGrades from './examGrades'
import routeReducer from './routeReducer'

const reducers = combineReducers({
  examGrades,
  routeReducer
})

export default reducers
