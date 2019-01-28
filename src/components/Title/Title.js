import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';

const Title = React.memo(() => (
  <Box>
    <Typography
      variant="h1"
      textAlign="center"
      color="white"
      fontSize={{ xs: 50, lg: 80 }}
      lineHeight={{ xs: '50px', lg: '80px' }}
      fontWeight={700}
      textAlign="left"
      m={0}
      letterSpacing={1.5}
    >
      THE RECIPE BUILDER APP
    </Typography>
  </Box>
));

const rowContentSetup = {
  rowConfig: {
    mb: '10px',
  },
  colConfig: {
    p: '70px',
    backgroundColor: '#1865f4',
    display: 'flex',
    justifyContent: { xs: 'center', lg: 'left' },
  },
  boxConfig: {
    as: 'header',
    role: 'banner',
    textAlign: 'center',
    mx: 0,
    maxWidth: '500px',
  },
};

const WrappedTitle = withRowContent(rowContentSetup)(Title);

export default WrappedTitle;
