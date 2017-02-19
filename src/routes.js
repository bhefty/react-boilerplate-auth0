import React from 'react'
import { Router, Route } from 'react-router'
import AuthService from './utils/AuthService'

import App from './modules/App/'

const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN

const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App} auth={auth}>

    </Route>
  </Router>
)

export default Routes
