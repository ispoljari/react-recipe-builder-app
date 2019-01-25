import React, { Component } from 'react';
import { 
  Grid, 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';
import Loading from 'react-loading-animation';
import uuidv4 from 'uuid/v4';
import Clarifai from 'clarifai';

import { 
  Title, 
  SearchRecipes, 
  IngredientsList, 
  InputIngredient,
  Results,
  Navigation,
  CaptureImg } from '../components';
import { fetchResults, isError } from '../util';
import { API_KEY_CLARAFAI } from '../config';
import { URL_RECIPES_API, URL_CORS_PROXY } from '../config';

export default class App extends Component {
  state = {
    error: null,
    message: '',
    results: [],
    page: 1,
    loadingRecipes: false,
    loadingPredictions: false,
    value: '',
    ingredientsList: [],
    capturedImg: ''
  };

  // Called from <InputIngredient />
  // -------------------------------

  handleChange = e => {
    const value = e.target.value;

    const onlyComma = (value.split().length === 1 && value.split()[0] === ',');
    const isLetter = value ? value.match(/^[A-Za-z,\s]+$/i) : true;
    
    if (!onlyComma && isLetter) {
      this.setState({
        value
      }, () => {
        if (value.includes(','))  {
         this.updateIngredientsList(value, 'change');
        } 
      });
    }
  } 

  handlePress = e => {
    const { value } = this.state;

    if (e.key === 'Enter' && value) {
      this.updateIngredientsList(value, 'press');
    }
  }

  updateIngredientsList = (value, type) => {
    const parsedValue = type === 'press' ? value : value.substr(0, value.indexOf(','));
    const noDuplicate = this.checkIfDuplicateExists(parsedValue);
    
    if (noDuplicate) {
      this.saveNewIngredientsToState(parsedValue);
    } else {
      this.setState({
        message: `${parsedValue} is already on the list`
      });
    }

    this.setState({
      value: ''
    })
  }

  saveNewIngredientsToState = (...values) => {
    const ingredients = values.map(value => ({
      value,
      id: uuidv4()
    })
    );

    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList, ...ingredients],
      message: '',
      error: ''
    })
    );
  }

  checkIfDuplicateExists = value => {
    return this.state.ingredientsList.filter(item => (
      item.value.toLowerCase() === value.toLowerCase()
    )).length > 0 ? false : true;
  }


  // Called from <IngredientList />
  // -------------------------------

  deleteIngredient = e => {
    const id = e.target.parentNode.dataset.key

    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList.filter(item => item.id !== id)],
      message: ''
    })
    );
  }

  // Called from <SearchRecipes />
  // -------------------------------

  handleSubmit = e => {
    const { loadingRecipes, loadingPredictions } = this.state;

    e.preventDefault();

    if (!loadingRecipes && !loadingPredictions) {
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
      error: ''
    })
    );
  }

  resetPageCount = () => {
    this.setState({
      page: 1
    });
  }

  checkIngredientList = () => {
    const { ingredientsList } = this.state;
    
    if (ingredientsList.length === 0) {
      this.setState({
        message: 'Before pressing Search you must select at least 1 ingredient. Add comma or press enter  after each ingredient'
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

  loadSuccess = results => {
    if (results.length > 0) {
      this.setState(() => ({
        results: [...results]
        })
      );
    } else {
      this.setState({
        message: 'Your search produced no results. Please try again.'
      });
    }
  }

  loadFail = error => {
    this.setState({
      error
    });
  }

  updateRecipeLoadingStatus = status => {
    this.setState({
      loadingRecipes: status
    });
  }

  // Called from <Navigation />
  // -------------------------------

  navigatePage = e => {
    const button = e.target.id;
    const { page } = this.state;
    
    if (button === 'prev' && page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1
      }), () => {
        this.clearResults();
        this.checkIngredientList();
        this.loadRecipes(); 
      }
      );
    }
    
    if (button === 'next') {
      this.setState(prevState => ({
        page: prevState.page + 1
      }), () => {
        this.clearResults();
        this.checkIngredientList();
        this.loadRecipes(); 
      }
      );
    }
  }

  // Called from <CaptureImg />
  // --------------------------

  previewCapturedImg = e => {
    const imgFile = e.target.files[0];

    if (imgFile) {
      this.setState({
        capturedImg: URL.createObjectURL(imgFile)
      });

      this.getPredictionsFromImage(imgFile);
    }
  }

  removeCapturedImg = () => {
    const { capturedImg } = this.state;

    if (capturedImg) {
      URL.revokeObjectURL(capturedImg);
      this.setState({
        capturedImg: ''
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
        apiKey: `${API_KEY_CLARAFAI}`
      });

      app.models.predict(Clarifai.FOOD_MODEL, {base64: result}, {maxConcepts: 5, minValue: 0.9})
      .then(
        function(response) {
          const responseArray = response.outputs[0].data.concepts;

          if (responseArray.length > 0) {
            return responseArray.map(item => (
              item.name
            ));
          }

          return [];
        },
        function(error) {
          return error;
        }
      )
      .then(ingredients => {
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
      .catch(error => {
        this.updatePredictionsLoadingStatus(false);
        this.loadFail('Cannot parse image.');
      })
    }
  }

  updatePredictionsLoadingStatus = status => {
    this.setState({
      loadingPredictions: status
    })
  }

  render() {
    const { 
      ingredientsList, 
      results, 
      value,
      loadingRecipes,
      loadingPredictions,
      error,
      message,
      capturedImg } = this.state;

    return (
      <Grid>
        <Row 
        display="flex"
        alignItems="center"
        mt={{xs: "10%", lg: "5%"}}>
          <Col> 
            <Row 
            mb={10}>
              <Col>
                <Box 
                as="header" 
                role="banner" 
                display="flex" 
                mx="auto"
                justifyContent="center"
                maxWidth={500}>
                  <Title text="Recipe Builder"/>
                </Box>
              </Col>
            </Row>
            <Row 
            mb={15}>
              <Col>
                <Box 
                as="header" 
                role="banner" 
                display="flex" 
                mx="auto"
                justifyContent="center"
                maxWidth={500}>
                  <CaptureImg
                  onChange={e => this.previewCapturedImg(e)}
                  onClick={this.removeCapturedImg}
                  capturedImg = {capturedImg} />
                </Box>
              </Col>
            </Row>
            <Row
            my={10}>
              <Col>
                <Box 
                as="section" 
                role="region" 
                mx="auto"
                maxWidth= {300}
                >
                  <InputIngredient 
                  onChange={e => this.handleChange(e)}
                  onKeyDown={e => this.handlePress(e)}
                  value={value}/>
                </Box>
              </Col>
            </Row>
            <Row
            my={10}>
              <Col>
                <Box 
                as="section" 
                role="region" 
                mx="auto"
                maxWidth= {300}
                >
                <SearchRecipes 
                  handleSubmit={e => this.handleSubmit(e)}/>
                </Box>
              </Col>
            </Row>
            <Row>
              <Col>
                <Box 
                as="section" 
                role="region" 
                mx="auto"
                maxWidth= {300}
                >
                  <Loading 
                  isLoading={loadingPredictions}> 
                    <IngredientsList
                    ingredientsList={ingredientsList}
                    onClick={e => this.deleteIngredient(e)}/>
                  </Loading>
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row 
        my={30}>
          <Col>
            <Box 
            as="main" 
            role="main" 
            >
              <Loading 
              isLoading={loadingRecipes}> 
                <Results 
                results={results}
                ingredientsList={ingredientsList}
                message={message}
                error={error}/>
                {(results.length > 0 && !message && !error) ? 
                <Navigation 
                onClick={e => this.navigatePage(e)}/> : ''
                }
              </Loading>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
};
