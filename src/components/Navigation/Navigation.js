import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';

const Navigation = React.memo(({ onClick }) => (
  <Box
    display="flex"
    justifyContent="center"
  >
    <Button
      id="prev"
      aria-label="Go to previous page"
      variant="secondary"
      size="sm"
      width={0.4}
      maxWidth={100}
      minHeight={40}
      fontSize={20}
      type="button"
      onClick={onClick}
    >
      Prev
    </Button>
    <Button
      id="next"
      aria-label="Go to next page"
      variant="dark"
      size="sm"
      width={0.4}
      ml={10}
      maxWidth={100}
      minHeight={40}
      fontSize={20}
      type="button"
      onClick={onClick}
    >
      Next
    </Button>
  </Box>
));

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const rowContentSetup = {
  rowConfig: {
    mb: '20px',
  },
  colConfig: {},
  boxConfig: {
    as: 'section',
    role: 'region',
  },
};

const WrappedNavigation = withRowContent(rowContentSetup)(Navigation);

export default WrappedNavigation;
