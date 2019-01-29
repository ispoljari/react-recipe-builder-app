import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';
import Form from './SearchRecipes.style';

const SearchRecipes = React.memo(({ handleSubmit }) => (
  <Form
    onSubmit={handleSubmit}
  >
    <Button
      aria-label="Submit button. Search for recipes."
      variant="success"
      width={1}
      minHeight={40}
      fontSize={20}
      type="submit"
    >
      Search
    </Button>
  </Form>
));

SearchRecipes.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const rowContentSetup = {
  rowConfig: {
    mt: '10px',
  },
  colConfig: {},
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 'auto',
    maxWidth: '400px',
  },
};

const WrappedSearchRecipes = withRowContent(rowContentSetup)(SearchRecipes);

export default WrappedSearchRecipes;
