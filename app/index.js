require('./assets/stylesheets/app.scss')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App'

const store = configureStore()

window.store = store

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
