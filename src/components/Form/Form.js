import React, { Component } from 'react';
import { Button } from '@smooth-ui/core-sc';
import * as Styled from './Form.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

const INITIAL_STATE = {
  error: null,
  results: [],
  loading: false,
  ingredients: []
};

class Form extends Component {
  state = {...INITIAL_STATE};

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
      <Styled.Form 
      onSubmit={this.handleSubmit}>
        <Button 
        variant="success" 
        width={1} 
        minHeight={40} 
        fontSize={20} 
        type="submit">
          Search
        </Button>
      </Styled.Form>
    ); 
  }
};

export default Form;