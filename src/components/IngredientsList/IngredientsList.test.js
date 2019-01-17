import React from 'react';
import { shallow } from 'enzyme';
import IngredientsList from './IngredientsList';

describe('<IngredientsList />', () => {
  const dummy = ['ingr1', 'ingr2'];
  
  it('Renders without crashing', () => {
    shallow(<IngredientsList ingredients={dummy}/>);
  });
});