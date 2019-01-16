import React from 'react';
import ReactDOM from 'react-dom';

import * as Styled from './global-style';

import App from './App';

ReactDOM.render(
  <React.Fragment>
    <Styled.Global />
    <App />
  </React.Fragment>, 
  document.getElementById('root')
);