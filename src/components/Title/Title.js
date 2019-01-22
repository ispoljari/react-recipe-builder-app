import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

const Title = () => (
  <Box>
    <Typography 
    variant="h1" 
    textAlign="center" 
    m={0} 
    letterSpacing={1.5} >
      Recipe Builder 
    </Typography>
    <Typography 
    variant="h2" 
    textAlign="justify" 
    fontSize={{xs: 18, md: 20}} 
    fontWeight="normal" 
    lineHeight={1.5} 
    m={0} px={18} 
    mt={30} 
    letterSpacing={1.5}>
      Take a picture of the ingredients you whish to use. 
      After they have been recognized by the app, simply press <strong>Search</strong> and wait for the results. You can easily add or remove ingredients manually.
    </Typography>
  </Box>
);

export default Title;