import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

const INITIAL_STATE = {
  error: null,
  results: [],
  loading: false,
  value: '',
  ingredients: []
};

class Form extends Component {
  state = {...INITIAL_STATE};

  handleChange = e => {
   const currIngredient = e.target.value;

    this.setState({
      value: currIngredient,
    });

    if (currIngredient.includes(',')) {
      this.props.harvestIngredientList(currIngredient.substr(0, currIngredient.indexOf(',')));

      this.setState({
        value: '',
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.loadRecipes();
  }

  loadRecipes = async () => {
    this.setState({
      ...INITIAL_STATE,
      loading: true
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

  loadSuccess = results => {
    console.log(results);
    this.setState(prevState => ({
      results: [...prevState.results, ...results],
      loading: false
    })
    );
  }

  loadFail = () => {
    this.setState({
      error: 'Could not load recipes',
      loading: false
    });
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