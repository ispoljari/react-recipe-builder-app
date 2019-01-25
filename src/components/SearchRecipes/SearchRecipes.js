import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './SearchRecipes.style';

const SearchRecipes = React.memo(({handleSubmit}) => (
  <Styled.Form 
  onSubmit={handleSubmit}>
    <Button 
    variant="success" 
    width={1} 
    minHeight={40} 
    fontSize={20} 
    type="submit">
      Search
    </Button>
  </Styled.Form>
));

SearchRecipes.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SearchRecipes;