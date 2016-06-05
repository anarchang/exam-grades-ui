import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import gradeMerger from './gradeMerger'

const loggerMiddleware = createLogger()
const engine = createEngine('exam-grades-db')
const localStorageMiddleware = storage.createMiddleware(engine)
const reducer = storage.reducer(reducers, gradeMerger)

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      localStorageMiddleware
    )
  )
}

export { engine }
