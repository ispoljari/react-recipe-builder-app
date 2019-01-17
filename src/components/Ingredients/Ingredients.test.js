import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from './Ingredients';

describe('<Ingredients />', () => {
  it('Renders without crashing', () => {
    shallow(<Ingredients />);
  });
});