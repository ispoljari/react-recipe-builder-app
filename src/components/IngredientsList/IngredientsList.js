import React from 'react';
import * as Styled from './IngredientsList.style';

import uuidv4 from 'uuid/v4';

const IngredientsList = ({ingredients}) => (
  <Styled.List>
   {ingredients.map(item => 
    <li key={uuidv4()}>
      {item}
    </li>
   )}
  </Styled.List>
);

export default IngredientsList;