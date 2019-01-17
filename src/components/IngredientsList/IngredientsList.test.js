import React from 'react';
import { shallow } from 'enzyme';
import IngredientsList from './IngredientsList';

describe('<IngredientsList />', () => {
  it('Renders without crashing', () => {
    shallow(<IngredientsList />);
  });
});