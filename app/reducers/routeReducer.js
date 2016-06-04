/**
* This reducer is for use with the react-router-redux library since we are using Immutable.js in our state
**/
import Immutable from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
})

export default function routerReducer(state = initialState, { type, payload } = {}) {
  if (type === LOCATION_CHANGE) {
    return state.merge({'locationBeforeTransitions': payload})
  }

  return state
}
