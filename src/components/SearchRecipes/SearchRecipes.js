import React from 'react';

import { Button } from '@smooth-ui/core-sc';
import * as Styled from './SearchRecipes.style';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../../config';

import { fetchResults, isError } from '../../util';

const FULL_API_URL = `${URL_CORS_PROXY}?${URL_RECIPES_API}`;

const SearchRecipes = ({updateLoadingStatus, receiveResults, receiveError, checkIngredientList, clearResults, ingredientsList, page}) => {

  const handleSubmit = e => {
    e.preventDefault();
    clearResults();
    checkIngredientList();
    loadRecipes();
  }
  
  const loadRecipes = async () => {
    const ingredients = ingredientsList.map(item => item.value).toString();

    if (ingredients) {
      updateLoadingStatus(true);

      const URL_QUERY = `${FULL_API_URL}?i=${ingredients}&p=${page}`;
      
      const rawResult = await fetchResults(URL_QUERY);
      let jsonResult;

      if (!isError(rawResult)) {
        jsonResult = await rawResult.transformToJSON();
      } else {
        return loadFail(rawResult);
      }

      if (!isError(jsonResult)) {
        loadSuccess(jsonResult.results);
      } else {
        return loadFail(rawResult);
      }
    }
  }

  const loadSuccess = results => {
    receiveResults(results);
    updateLoadingStatus(false);
  }

  const loadFail = error => {
    receiveError(error);
    updateLoadingStatus(false);
  }

  return (
    <Styled.Form 
    onSubmit={handleSubmit}>
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
};

export default SearchRecipes;