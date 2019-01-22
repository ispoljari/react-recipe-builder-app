import React from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './SearchRecipes.style';

const SearchRecipes = ({handleSubmit}) => {
  return (
    <Styled.Form 
    onSubmit={e => handleSubmit(e)}>
      <Button 
      variant="success" 
      width={1} 
      minHeight={40} 
      fontSize={20} 
      type="submit">
        Search
      </Button>
    </Styled.Form>
  ); 
};

export default SearchRecipes;