import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';

describe('<AppContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<AppContainer />);
  });
});