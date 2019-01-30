import React from 'react';
import { Box } from '@smooth-ui/core-sc';

import Img from './Image.style';
import withRowContent from '../../hocs/RowContent';

const Image = React.memo(({ imgSrc, altText }) => (
  <Box>
    <Img
      src={imgSrc}
      alt={altText}
    />
  </Box>
));

const rowContentSetup = {
  rowConfig: {},
  colConfig: {
    minHeight: '340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 0,
  },
};

const WrappedImage = withRowContent(rowContentSetup)(Image);

export default WrappedImage;
