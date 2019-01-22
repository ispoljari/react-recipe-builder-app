import React from 'react';

import { Button, Box } from '@smooth-ui/core-sc';

const Navigation = ({visible}) => (
  visible ? 
    <Box
    display="flex"
    justifyContent="center">
      <Button
      variant="secondary" 
      size="sm"
      width={0.4}
      maxWidth={100} 
      minHeight={40} 
      fontSize={20} 
      type="button">
        Prev
        </Button>
      <Button
      variant="dark" 
      size="sm"
      width={0.4}
      ml={10}
      maxWidth={100} 
      minHeight={40} 
      fontSize={20} 
      type="button">
        Next
        </Button>
    </Box> : ''
);

export default Navigation;
