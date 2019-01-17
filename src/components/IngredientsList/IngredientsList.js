import React from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './IngredientsList.style';

const IngredientsList = ({ingredients, onClick}) => (
  <Styled.List>
   {ingredients.map(item => 
    <li key={item.id} data-key={item.id}>
      {item.value}
      <Button p="5px" backgroundColor="transparent" color="black" type="button" onClick={e => onClick(e.target.parentNode.dataset.key)}>
        &#10006;
      </Button>
    </li>
   )}
  </Styled.List>
);

export default IngredientsList;