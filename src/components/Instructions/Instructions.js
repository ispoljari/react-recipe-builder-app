import React from 'react';

import { Title } from '../Title/Title';
import withRowContent from '../../hocs/RowContent';

const Instructions = React.memo(({
  text, variant, color, fontSizeXS, fontSizeLG, textAlign,
}) => (
  <Title
    variant={variant}
    color={color}
    text={text}
    textAlign={textAlign}
    fontSizeXS={fontSizeXS}
    fontSizeLG={fontSizeLG}
  />
));

const rowContentSetup = {
  rowConfig: {},
  colConfig: {
    p: '50px',
    minHeight: '340px',
    display: 'flex',
    backgroundColor: '#49bdac',
    alignItems: 'center',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 0,
  },
};

const WrappedInstructions = withRowContent(rowContentSetup)(Instructions);

export default WrappedInstructions;
