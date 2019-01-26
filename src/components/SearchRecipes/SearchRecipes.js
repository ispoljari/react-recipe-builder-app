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
  rowMargin: {
    my: '10px',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 'auto',
    maxWidth: '300px',
  },
};

const WrappedSearchRecipes = withRowContent(rowContentSetup)(SearchRecipes);

export default WrappedSearchRecipes;
