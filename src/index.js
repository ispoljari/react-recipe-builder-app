import React from 'react';
import ReactDOM from 'react-dom';

import * as Styled from './global-style';

import AppContainer from './App/AppContainer';

ReactDOM.render(
  <React.Fragment>
    <Styled.Global />
    <AppContainer />
  </React.Fragment>, 
  document.getElementById('root')
);