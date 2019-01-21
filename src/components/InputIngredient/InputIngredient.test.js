import React from 'react';
import { shallow } from 'enzyme';
import InputIngredient from './InputIngredient';

describe('<InputIngredient />', () => {
  it('Renders without crashing', () => {
    shallow(<InputIngredient />);
  });
});