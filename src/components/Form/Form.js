import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.loadRecipes();
  }

  loadRecipes = () => {
    console.log('hello');
  }

  render() {
    return (
      <Styled.Form onSubmit={this.handleSubmit}>
        <Input type="text" name="ingredients" placeholder="Enter some ingredients..." required size="md" control p={10}/>
      </Styled.Form>
    ); 
  }
};

export default Form;