import React from 'react';

import { Title } from '../Title/Title';
import withRowContent from '../../hocs/RowContent';

const SubTitle = React.memo(({
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 0,
  },
};

const WrappedSubTitle = withRowContent(rowContentSetup)(SubTitle);

export default WrappedSubTitle;
