import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('<Title />', () => {
  it('Renders without crashing', () => {
    shallow(<Title />);
  });
});