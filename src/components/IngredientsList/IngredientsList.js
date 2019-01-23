import React from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './IngredientsList.style';

const IngredientsList = ({ingredientsList, onClick}) => (
  <Styled.List
  visible={ingredientsList.length>0}>
   {ingredientsList.map(item => 
    <li 
    key={item.id} 
    data-key={item.id}>
      <span>
        {item.value}
      </span>
      <Button 
      p="5px" 
      display="inline-block" 
      backgroundColor="transparent" 
      color="black" 
      type="button" 
      onClick={onClick}>
        &#10006;
      </Button>
    </li>
   )}
  </Styled.List>
);

export default IngredientsList;