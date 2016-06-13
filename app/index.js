require('./assets/stylesheets/app.scss')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { engine } from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App'
import * as storage from 'redux-storage'


const store = configureStore()

// load the previous state. Currently stored in localStorage
const load = storage.createLoader(engine)

// for debugging
window.store = store

load(store)
    .then(() => {

      // set up the history before loding the store from storage so that it
      // doesn't get overwritten.
      const history = syncHistoryWithStore(browserHistory, store, {
          selectLocationState (state) {
            return state.get('routeReducer').toJS()
          }
      })

      render(
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={App} />
          </Router>
        </Provider>,
        document.getElementById('root')
      )
    })
    .catch(() =>
      /* eslint-disable no-console */
      console.log('Failed to load previous state')
      /* eslint-disable no-console */
    )


