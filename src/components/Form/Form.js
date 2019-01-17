import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

import { URL_RECIPES_API, API_KEY } from '../../config';

class Form extends Component {
  getInitialState = () => ({
    error: null,
    results: null,
    loading: true,
  })

  state = this.getInitialState();

  handleSubmit = e => {
    e.preventDefault();
    this.loadRecipes();
  }

  loadRecipes = async () => {
    console.log(API_KEY);
    this.setState(this.getInitialState());

    let rawResult;
    
    try {
      rawResult = await fetch(`${URL_RECIPES_API}`);
    } catch (error) {
      return this.loadFail();
    }

    if (rawResult) {
      const resultJSON = rawResult.json();

      if (resultJSON.recipes) {
        this.loadSuccess(resultJSON.recipes);
      } else {
        return this.loadFail();
      }
    }
  }

  loadSuccess = result => {
    this.setState({
      results: result.recipes,
      loading: false
    });
  }

  loadFail = () => {
    this.setState({
      error: 'Could not load recipes',
      loading: false
    })
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