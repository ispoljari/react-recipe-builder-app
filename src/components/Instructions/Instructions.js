import React from 'react';
import PropTypes from 'prop-types';

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

Instructions.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  fontSizeXS: PropTypes.number.isRequired,
  fontSizeLG: PropTypes.number.isRequired,
};

const WrappedInstructions = withRowContent(rowContentSetup)(Instructions);

export default WrappedInstructions;
