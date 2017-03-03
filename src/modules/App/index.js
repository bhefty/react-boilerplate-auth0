import React from 'react';

import Navigation from './components/Navigation'

import logo from './logo.svg'
import Wrapper from './Wrapper'
import HeaderDiv from './HeaderDiv'
import IMG from './IMG'
import P from './P'

const App = (props) => {
  return (
    <div>
      <Navigation auth={props.route.auth} />
      <Wrapper>
        <HeaderDiv>
          <h2>Welcome to React</h2>
          <IMG src={logo}/>
        </HeaderDiv>
        <P>
          To get started, edit <code>src/modules/App/index.js</code> and save to reload.
        </P>
        {props.children}
      </Wrapper>
    </div>
  );
}

export default App;
