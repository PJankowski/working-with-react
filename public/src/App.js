import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './layout/Layout'

import Register from './components/Register'
import Login from './components/Login'

import store from './store'

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={Layout} />
    </Router>
  </Provider>, document.getElementById('App'));
