import React from 'react';
import { Input } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const InputIngredient = ({ onChange, onKeyDown, value }) => (
  <Input
    type="text"
    name="ingredients"
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
  value: PropTypes.string,
};

InputIngredient.defaultProps = {
  value: '',
};

export default InputIngredient;
