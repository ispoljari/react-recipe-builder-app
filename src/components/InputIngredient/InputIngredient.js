import React from 'react';
import { Input } from '@smooth-ui/core-sc';

const InputIngredient = ({onChange, onKeyDown, value}) => (
  <Input 
  type="text" 
  name="ingredients" 
  placeholder="Enter some ingredients..."
  value={value} 
  onChange={e => onChange(e)}
  onKeyDown={e => onKeyDown(e)}
  required 
  size="md" 
  borderRadius={5} 
  fontSize={20}
  control 
  p={10}/>
)

export default InputIngredient;