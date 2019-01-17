import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

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
    this.setState(this.getInitialState());

    let rawResult;
    
    try {
      rawResult = await fetch(`${URL_CORS_PROXY}?${URL_RECIPES_API}?i=toast`);
    } catch (error) {
      return this.loadFail();
    }

    if (rawResult) {
      const resultJSON = await rawResult.json();

      if (resultJSON.results) {
        this.loadSuccess(resultJSON.results);
      } else {
        return this.loadFail();
      }
    }
  }

  loadSuccess = result => {
    this.setState({
      results: result,
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