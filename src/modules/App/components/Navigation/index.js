import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import AuthService from '../../../../utils/AuthService'

class Navigation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }

    props.auth.on('profile_updated', (newProfile) => {
      this.setState({ profile: newProfile })
    })

    props.auth.on('profile_removed', () => {
      this.setState({ profile: {} })
    })
  }
  render() {
    return (
      <Navbar staticTop collapseOnSelect={true}>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>React App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='home'>
                <NavItem>Home</NavItem>
              </LinkContainer>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something Else</MenuItem>
                <MenuItem divider />
                <MenuItem>Separated Link</MenuItem>
              </NavDropdown>
            </Nav>
            {
              (this.props.auth.loggedIn()) ?
                <Nav pullRight>
                  <NavItem disabled>Hello, {this.state.profile.name}!</NavItem>
                  <LinkContainer to='/'>
                    <NavItem onClick={() => this.props.auth.logout()}>Logout</NavItem>
                  </LinkContainer>
                </Nav>
              :
                <Nav pullRight>
                  <LinkContainer to='login'>
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Nav>
            }
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

Navigation.contextTypes = {
  router: PropTypes.object
}

Navigation.propTypes = {
  auth: PropTypes.instanceOf(AuthService)
}

export default Navigation;
