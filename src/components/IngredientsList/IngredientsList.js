import React from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './IngredientsList.style';

import uuidv4 from 'uuid/v4';

const IngredientsList = ({ingredients}) => (
  <Styled.List>
   {ingredients.map(item => 
    <li key={uuidv4()}>
      {item}
      <span>
        <Button p="5px" backgroundColor="transparent" color="black">
          &#10006;
        </Button>
      </span>  
    </li>
   )}
  </Styled.List>
);

export default IngredientsList;