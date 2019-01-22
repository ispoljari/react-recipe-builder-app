import React from 'react';

import { Button, Box } from '@smooth-ui/core-sc';

const Navigation = ({onClick}) => (
  <Box
  display="flex"
  justifyContent="center">
    <Button
    id="prev"
    variant="secondary" 
    size="sm"
    width={0.4}
    maxWidth={100} 
    minHeight={40} 
    fontSize={20} 
    type="button"
    onClick={onClick}>
      Prev
    </Button>
    <Button
    id="next"
    variant="dark" 
    size="sm"
    width={0.4}
    ml={10}
    maxWidth={100} 
    minHeight={40} 
    fontSize={20} 
    type="button"
    onClick={onClick}>
      Next
    </Button>
  </Box> 
);


export default Navigation;
