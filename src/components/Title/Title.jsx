import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

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

export default Title;
