import React from 'react';
import { shallow } from 'enzyme';
import IngredientsList from './IngredientsList';

describe('<IngredientsList />', () => {
  const ingredientsList = [
    {
      value: 'value1',
      id: 'id1'
    }, 
    {
      value: 'value2',
      id: 'id2'
    }
  ];
  const onClick = jest.fn();

  it('Renders without crashing', () => {
    shallow(
    <IngredientsList 
      ingredientsList={ingredientsList}
      onClick={onClick}
    />);
  });
});