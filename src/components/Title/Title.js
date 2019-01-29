import React from 'react';
import { Typography, Box, Button } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';

export const Title = React.memo(({
  text, variant, color, fontSizeXS, fontSizeLG, textAlign,
}) => (
  <Box>
    <Typography
      variant={variant}
      color={color}
      fontSize={{ xs: fontSizeXS, lg: fontSizeLG }}
      lineHeight={{ xs: `${fontSizeXS + 10}px`, lg: `${fontSizeLG + 10}px` }}
      fontWeight={700}
      textAlign={textAlign}
      m={0}
      letterSpacing={1.5}
    >
      {text}
    </Typography>
    {variant === 'h1'
      ? (
        <Button
          fontWeight={500}
          fontSize={{ xs: 18, lg: 26 }}
          textAlign="center"
          py="5px"
          px="20px"
          backgroundColor="#ffb142"
          borderRadius="20px"
          position="absolute"
          bottom="15px"
          right="15px"
        >
      Skip Description
        </Button>
      ) : ''}
  </Box>
));

const rowContentSetup = {
  rowConfig: {},
  colConfig: {
    position: 'relative',
    p: '50px',
    display: 'flex',
    backgroundColor: '#1865f4',
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
