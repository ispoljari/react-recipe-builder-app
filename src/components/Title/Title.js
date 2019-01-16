import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

const Title = () => (
  <Box>
    <Typography variant="h1" textAlign="center" m={0}>
      Recipe Builder
    </Typography>
    <Typography variant="h2" textAlign="left" fontSize={22} fontWeight="normal" lineHeight={1.5} m={0} mt={20}>
    Want to cook something nice and simple but don't have any idea where to start?
    <br />
    <br />
    With Recipe Builder finding a recipe was never easier.
    <br />
    <br />
    Just take a picture of the ingredients you have and in a few moments you will receive a list recommended recipes.
    </Typography>
  </Box>
);

export default Title;