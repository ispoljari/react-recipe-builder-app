import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';

const Title = React.memo(() => (
  <Box>
    <Typography
      variant="h1"
      textAlign="center"
      m={0}
      letterSpacing={1.5}
    >
      Recipe Builder
    </Typography>
  </Box>
));

const rowContentSetup = {
  rowConfig: {
    mb: '10px',
  },
  colConfig: {},
  boxConfig: {
    as: 'header',
    role: 'banner',
    display: 'flex',
    mx: 'auto',
    justifyContent: 'center',
    maxWidth: '500px',
  },
};

const WrappedTitle = withRowContent(rowContentSetup)(Title);

export default WrappedTitle;
