import React from 'react';
import { Input } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

import withRowContent from '../../hocs/RowContent';

const InputIngredient = ({ onChange, onKeyDown, value }) => (
  <Input
    aria-label="Input field. Enter ingredients."
    type="text"
    name="Ingredients input field"
    placeholder="eggs, bacon, salt,"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    required
    size="md"
    borderRadius={5}
    fontSize={20}
    control
    p={10}
  />
);

InputIngredient.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const rowContentSetup = {
  rowConfig: {
    my: '10px',
  },
  colConfig: {},
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 'auto',
    maxWidth: '400px',
  },
};

const WrappedInputIngredient = withRowContent(rowContentSetup)(InputIngredient);


export default WrappedInputIngredient;
