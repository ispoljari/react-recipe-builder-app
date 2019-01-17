import React from 'react';
import * as Styled from './Ingredients.style';

const Ingredients = ({ingredients}) => (
  <Styled.List>
   {ingredients.map(item => <li>{item}</li>)}
  </Styled.List>
);

export default Ingredients;