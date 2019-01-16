import React from 'react';
import { Input } from '@smooth-ui/core-sc';

const Form = () => (
  <form>
    <Input type="text" name="ingredients" placeholder="Enter some ingredients..." required/>
  </form>
);

export default Form;