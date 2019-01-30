import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Clarifai from 'clarifai';

import App from './App';
import {
  fetchResults,
  isError,
  checkIfDuplicateExists,
  tagSelectedIngredients,
} from './util';
import { URL_RECIPES_API, URL_CORS_PROXY, API_KEY_CLARAFAI } from './config';

export default class AppContainer extends Component {
  state = {
    error: '',
    message: '',
    results: [],
    page: 1,
    loadingRecipes: false,
    loadingPredictions: false,
    value: '',
    ingredientsList: [],
    capturedImg: '',
    a11yIngredients: '',
    a11yResults: '',
    firstIngredientLoaded: false,
    firstResultLoaded: false,
  };

  // Called from <InputIngredient />
  // -------------------------------

  handleChange = (e) => {
    const value = e.target.value; // current input value
    const onlyComma = (value.split().length === 1 && value.split()[0] === ','); // true if only char in value is comma
    const isLetter = value ? value.match(/^[A-Za-z,\s]+$/i) : true; // true if chars from current value are letters or there is no value

    if (!onlyComma && isLetter) {
      this.setState({
        value,
      }, () => {
        if (value.includes(',')) { // if user adds a comma the ingredient list is updated
          this.updateIngredientsList(value, 'change');
        }
      });
    }
  };

  handlePress = (e) => {
    const { value } = this.state;
    if (e.key === 'Enter' && value) {
      this.updateIngredientsList(value, 'press');
    }
  };

  updateIngredientsList = async (value, type) => {
    const parsedValue = type === 'press' ? value : value.substr(0, value.indexOf(',')); // if enter is pressed the ingredientList is updated with the current value, if comma is added the ingredientList is updated with the value before comma
    const noDuplicate = checkIfDuplicateExists(parsedValue, this.state.ingredientsList); // check if the ingredient is already on the list

    if (noDuplicate) {
      await this.saveNewIngredientsToState(parsedValue);
    } else {
      const messageString = `${parsedValue} is already on the list`;
      this.setState({
        message: messageString,
        a11yIngredients: messageString,
      });
    }

    this.setState({
      value: '',
    });
  };

  saveNewIngredientsToState = (...values) => new Promise((resolve) => {
    const ingredients = values.map(value => ({
      value,
      id: uuidv4(),
    }));

    const ariaMessage = values.length > 1
      ? `${values.toString()} have been added to the ingredients list`
      : `${values[0]} has been added to the ingredients list`;

    this.setState(prevState => ({
      a11yIngredients: ariaMessage,
      ingredientsList: [...prevState.ingredientsList, ...ingredients],
      firstIngredientLoaded: true,
      message: '',
      error: '',
    }), () => {
      resolve();
    });
  });

  // Called from <IngredientList />
  // -------------------------------

  deleteIngredient = (e) => {
    const { ingredientsList } = this.state;
    const id = e.target.parentNode.dataset.key;

    const targetIngredient = ingredientsList.filter(item => item.id === id)[0].value;
    const ariaMessage = `${targetIngredient} has been removed from the ingredients list`;

    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList.filter(item => item.value !== targetIngredient)],
      message: '',
      a11yIngredients: ariaMessage,
    }));
  }

  // Called from <SearchRecipes />
  // -------------------------------

  handleSubmit = async (e) => {
    e.preventDefault();
    const { loadingRecipes, loadingPredictions, value } = this.state;

    if (!(loadingRecipes || loadingPredictions)) { // check if app is loading results
      if (value) { // if there is a value in input field
        await this.updateIngredientsList(value, 'press'); // call the handlePress function to submit the value to ingredientsList
      }

      this.clearResults();
      this.resetPageCount();
      this.checkIngredientList();
      this.loadRecipes();
    }
  }

  clearResults = () => {
    this.setState(() => ({
      message: '',
      results: [],
      error: '',
      a11yIngredients: '',
      a11yResults: '',
    }));
  }

  resetPageCount = () => {
    this.setState({
      page: 1,
    });
  }

  checkIngredientList = () => {
    const { ingredientsList } = this.state;
    const messageString = 'Before pressing Search you must select at least 1 ingredient. Add comma or press enter  after each ingredient';

    if (ingredientsList.length === 0) {
      this.setState({
        message: messageString,
        a11yIngredients: messageString,
      });
    }
  }

  loadRecipes = async () => {
    const { ingredientsList, page } = this.state;
    const ingredients = ingredientsList.map(item => item.value).toString();

    if (ingredients) {
      this.updateRecipeLoadingStatus(true);

      const FULL_API_URL = `${URL_CORS_PROXY}?${URL_RECIPES_API}`;
      const URL_QUERY = `${FULL_API_URL}?i=${ingredients}&p=${page}`;
      const rawResult = await fetchResults(URL_QUERY);
      let jsonResult;

      if (!isError(rawResult)) {
        jsonResult = await rawResult.transformToJSON();
      } else {
        this.loadFail('Could not load recipes');
        return this.updateRecipeLoadingStatus(false);
      }

      if (!isError(jsonResult)) {
        this.loadSuccess(jsonResult.results);
        this.updateRecipeLoadingStatus(false);
      } else {
        this.loadFail('Could not load recipes');
        return this.updateRecipeLoadingStatus(false);
      }
    }
  }

  loadSuccess = (results) => {
    const { ingredientsList } = this.state;
    const resultsTaggedIngredients = tagSelectedIngredients(results, ingredientsList);
    const messageString = 'Your search produced no results. Please try again.';

    if (resultsTaggedIngredients.length > 0) {
      this.setState(() => ({
        results: [...resultsTaggedIngredients],
        a11yResults: `Search finnished. ${resultsTaggedIngredients.length} results available.`,
        firstResultLoaded: true,
      }));
    } else {
      this.setState({
        message: messageString,
        a11yResults: messageString,
        firstResultLoaded: true,
      });
    }
  }

  loadFail = (error) => {
    this.setState({
      error,
      a11yResults: error,
      firstResultLoaded: true,
      firstIngredientLoaded: true
    });
  }

  updateRecipeLoadingStatus = (status) => {
    this.setState({
      loadingRecipes: status,
    });
  }

  // Called from <Navigation />
  // -------------------------------

  navigatePage = (e) => {
    const button = e.target.id;
    const { page } = this.state;

    if (button === 'prev' && page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }), () => {
        this.clearResults();
        this.checkIngredientList();
        this.loadRecipes();
      });
    }

    if (button === 'next') {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }), () => {
        this.clearResults();
        this.checkIngredientList();
        this.loadRecipes();
      });
    }
  }

  // Called from <CaptureImg />
  // --------------------------

  previewCapturedImg = (e) => {
    const imgFile = e.target.files[0];

    if (imgFile) {
      this.setState({
        capturedImg: URL.createObjectURL(imgFile),
      });

      this.getPredictionsFromImage(imgFile);
    }
  }

  removeCapturedImg = () => {
    const { capturedImg } = this.state;

    if (capturedImg) {
      URL.revokeObjectURL(capturedImg);
      this.setState({
        capturedImg: '',
      });
    }
  }

  getPredictionsFromImage = (imgFile) => {
    this.updatePredictionsLoadingStatus(true);

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.onload = () => {
      const result = reader.result.split('base64,')[1];

      const app = new Clarifai.App({
        apiKey: `${API_KEY_CLARAFAI}`,
      });

      app.models.predict(Clarifai.FOOD_MODEL, { base64: result }, { maxConcepts: 5, minValue: 0.95 })
        .then(
          (response) => {
            const responseArray = response.outputs[0].data.concepts;
            if (responseArray.length > 0) {
              return responseArray.map(item => (
                item.name
              ));
            }
            return [];
          },
          error => error,
        )
        .then((ingredients) => {
          this.updatePredictionsLoadingStatus(false);
          if (ingredients.length > 0) {
            this.saveNewIngredientsToState(...ingredients);
            this.clearResults();
            this.resetPageCount();
            this.loadRecipes();
          } else {
            this.loadFail('Cannot detect food.');
          }
        })
        .catch(() => {
          this.updatePredictionsLoadingStatus(false);
          this.loadFail('Cannot parse image.');
        });
    };
  }

  updatePredictionsLoadingStatus = (status) => {
    this.setState({
      loadingPredictions: status,
    });
  }

  render() {
    return (
      <App
        appState={this.state}
        handleChange={this.handleChange}
        previewCapturedImg={this.previewCapturedImg}
        removeCapturedImg={this.removeCapturedImg}
        handlePress={this.handlePress}
        handleSubmit={this.handleSubmit}
        deleteIngredient={this.deleteIngredient}
        navigatePage={this.navigatePage}
      />
    );
  }
}
