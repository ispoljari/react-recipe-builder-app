import React from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './style';

const Form = () => (
  <Styled.Form>
    <Input type="text" name="ingredients" placeholder="Enter some ingredients..." required size="md" control p={10}/>
  </Styled.Form>
);

export default Form;