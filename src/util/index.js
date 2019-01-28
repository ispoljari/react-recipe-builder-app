/* eslint-disable no-param-reassign */
const fetchResults = async (urlWithQuery) => {
  let rawData; let
    resultJSON;

  try {
    rawData = await fetch(urlWithQuery);
  } catch (error) {
    return new Error('Fetch error!');
  }

  const transformToJSON = async () => {
    if (rawData) {
      try {
        resultJSON = await rawData.json();
      } catch (error) {
        return new Error('JSON transform error!');
      }
    }

    return resultJSON;
  };

  return {
    transformToJSON,
  };
};

const isError = (obj) => {
  const result = obj instanceof Error;
  return result;
};

const tagSelectedIngredients = (results, ingredientsList) => {
  const resultsCopy = JSON.parse(JSON.stringify(results));

  resultsCopy.forEach((result) => {
    result.ingredients = result.ingredients.split(', ');
  });

  resultsCopy.forEach((result) => {
    result.ingredients.forEach((resultIngredient, index) => {
      if (ingredientsList.map(selectedIngredient => selectedIngredient.value)
        .includes(resultIngredient)) {
        result.ingredients[index] = {
          value: resultIngredient,
          chosen: true,
        };
      } else {
        result.ingredients[index] = {
          value: resultIngredient,
        };
      }
    });
  });

  return resultsCopy;
};

const checkIfDuplicateExists = (value, ingredientsList) => (!(ingredientsList.filter(item => (
  item.value.toLowerCase() === value.toLowerCase()
)).length > 0));

export {
  fetchResults,
  isError,
  checkIfDuplicateExists,
  tagSelectedIngredients,
};
