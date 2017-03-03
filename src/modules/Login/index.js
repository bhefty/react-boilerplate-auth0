import React, { Component } from 'react'

import AuthService from '../../utils/AuthService'

class Login extends Component {
  componentDidMount() {
    if (!this.props.route.auth.loggedIn()) {
      this.props.route.auth.login()
    }
  }

  render() {
    return (
      <div>
        Logging in....
      </div>
    )
  }
}

export default Login
