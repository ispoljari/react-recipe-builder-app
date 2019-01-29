import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';

export const Title = React.memo(({
  text, variant, color, fontSizeXS, fontSizeLG,
}) => (
  <Box>
    <Typography
      variant={variant}
      color={color}
      fontSize={{ xs: fontSizeXS, lg: fontSizeLG }}
      lineHeight={{ xs: `${fontSizeXS + 10}px`, lg: `${fontSizeLG + 10}px` }}
      fontWeight={700}
      textAlign="left"
      m={0}
      letterSpacing={1.5}
    >
      {text}
    </Typography>
  </Box>
));

const rowContentSetup = {
  rowConfig: {},
  colConfig: {
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
