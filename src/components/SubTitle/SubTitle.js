import React from 'react';

import { Title } from '../Title/Title';
import withRowContent from '../../hocs/RowContent';

const SubTitle = React.memo(({
  text, variant, color, fontSizeXS, fontSizeLG,
}) => (
  <Title
    variant={variant}
    color={color}
    text={text}
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
    justifyContent: { xs: 'center', lg: 'left' },
    alignItems: 'center',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    textAlign: 'center',
    mx: 0,
  },
};

const WrappedSubTitle = withRowContent(rowContentSetup)(SubTitle);

export default WrappedSubTitle;
