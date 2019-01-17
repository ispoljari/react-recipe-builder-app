import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

class Form extends Component {
  getInitialState = () => ({
    error: null,
    results: null,
    loading: false,
    value: ''
  });

  state = this.getInitialState();

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.loadRecipes();
  }

  loadRecipes = async () => {
    this.setState({
      error: null,
      results: null,
      loading: true,
    });

    let rawResult;
    
    try {
      rawResult = await fetch(`${URL_CORS_PROXY}?${URL_RECIPES_API}?i=toast&p=3`);
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
    console.log(result);
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
        <Input type="text" name="ingredients" placeholder="Enter some ingredients..." value={this.state.value} onChange={this.handleChange} required size="md" control p={10}/>
      </Styled.Form>
    ); 
  }
};

export default Form;