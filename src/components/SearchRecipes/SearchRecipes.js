import React, { Component } from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './SearchRecipes.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

import { fetchResults, isError } from '../../util';

const FULL_API_URL = `${URL_CORS_PROXY}?${URL_RECIPES_API}`;

const INITIAL_STATE = {
  error: null,
  results: [],
  loading: false,
  ingredients: []
};

class SearchRecipes extends Component {
  state = {...INITIAL_STATE};
  
  handleSubmit = e => {
    e.preventDefault();

    this.loadRecipes();
  }
  
  loadRecipes = async () => {
    const { ingredientsList, page } = this.props;
    const ingredients = ingredientsList.map(item => item.value).toString();

    if (ingredients) {
      this.setState({
        ...INITIAL_STATE,
        loading: true
      });

      const URL_QUERY = `${FULL_API_URL}?i=${ingredients}&p=${page}`;
      
      const rawResult = await fetchResults(URL_QUERY);
      let jsonResult;

      if (!isError(rawResult)) {
        jsonResult = await rawResult.transformToJSON();
      } else {
        return this.loadFail(rawResult);
      }

      if (!isError(jsonResult)) {
        this.loadSuccess(jsonResult.results);
      } else {
        return this.loadFail(rawResult);
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

  loadFail = (error='') => {
    console.log('error');
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

export default SearchRecipes;