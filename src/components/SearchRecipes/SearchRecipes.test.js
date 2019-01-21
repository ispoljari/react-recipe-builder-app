import React from 'react';
import { shallow } from 'enzyme';
import SearchRecipes from './SearchRecipes';

describe('<SearchRecipes />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchRecipes />);
  });
});