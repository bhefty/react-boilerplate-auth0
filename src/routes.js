import React from 'react'
import { Router, Route } from 'react-router'
import AuthService from './utils/AuthService'

import App from './modules/App'
import Home from './modules/Home'
import Login from './modules/Login'

const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN

const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/' })
  }
}

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App} auth={auth}>
      <Route path='home' component={Home} onEnter={requireAuth} />
      <Route path='login' component={Login} auth={auth} />
    </Route>
  </Router>
)

export default Routes
