import React from 'react';
import * as Styled from './Ingredients.style';

import uuidv4 from 'uuid/v4';

const Ingredients = ({ingredients}) => (
  <Styled.List>
   {ingredients.map(item => 
    <li key={uuidv4()}>
      {item}
    </li>
   )}
  </Styled.List>
);

export default Ingredients;