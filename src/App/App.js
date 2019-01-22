import React, { Component } from 'react';

import { 
  Title, 
  SearchRecipes, 
  IngredientsList, 
  InputIngredient,
  Results,
  Navigation,
  CaptureImg } from '../components';

import { 
  Grid, 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';
  
import Loading from 'react-loading-animation';

import uuidv4 from 'uuid/v4';

import { URL_RECIPES_API, URL_CORS_PROXY } from '../config';

import { fetchResults, isError } from '../util';

const FULL_API_URL = `${URL_CORS_PROXY}?${URL_RECIPES_API}`;

const INITIAL_STATE = {
  error: null,
  message: '',
  results: [],
  page: 1,
  loading: false,
  value: '',
  ingredientsList: []
}

class App extends Component {
  state = {...INITIAL_STATE};

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
         this.updateState(value, 'change');
        } 
      });
    }
  } 

  handlePress = e => {
    const { value } = this.state;

    if (e.key === 'Enter' && value) {
      this.updateState(value, 'press');
    }
  }

  updateState = (value, type) => {
    const parsedValue = type === 'press' ? value : value.substr(0, value.indexOf(','));
    const noDuplicate = this.checkIfDuplicateExists(parsedValue);
    
    if (noDuplicate) {
      const ingredient = {
        value: parsedValue,
        id: uuidv4()
      }
  
      this.setState(prevState => ({
        ingredientsList: [...prevState.ingredientsList, ingredient],
        value: '',
        message: ''
      })
      );
    } else {
      this.setState({
        value: '',
        message: `${parsedValue} is already on the list`
      });
    }
  }

  checkIfDuplicateExists = value => {
    return this.state.ingredientsList.filter(item => (
      item.value.toLowerCase() === value.toLowerCase()
    )).length > 0 ? false : true;
  }


  // Called from <IngredientList />
  // -------------------------------

  deleteIngredient = id => {
    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList.filter(item => item.id !== id)],
      message: ''
    })
    );
  }

  // Called from <SearchRecipes />
  // -------------------------------

  handleSubmit = e => {
    e.preventDefault();
    this.clearResults();
    this.resetPageCount();
    this.checkIngredientList();
    this.loadRecipes();
  }

  clearResults = () => {
    this.setState(() => ({
      message: '',
      results: []
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
        this.updateLoadingStatus(true);

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
    if (results.length > 0) {
      this.setState(() => ({
        results: [...results]
        })
      );
    } else {
      this.setState({
        message: 'Your search produced no results. Try reloading the page.'
      });
    }

    this.updateLoadingStatus(false);
  }

  loadFail = error => {
    this.setState({
      error: 'Could not load recipes',
    });

    this.updateLoadingStatus(false);
  }

  updateLoadingStatus = status => {
    this.setState({
      loading: status
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

  render() {
    const { 
      ingredientsList, 
      results, 
      value,
      loading,
      error,
      message } = this.state;

    return (
      <Grid>
        <Row 
        display="flex"
        alignItems="center"
        mt={{xs: "10%", lg: "5%"}}>
          <Col> 
            <Row 
            mb={40}>
              <Col>
                <Box 
                as="header" 
                role="banner" 
                display="flex" 
                mx="auto"
                justifyContent="center"
                maxWidth={500}>
                  <Title />
                </Box>
              </Col>
            </Row>
            <Row 
            mb={40}>
              <Col>
                <Box 
                as="header" 
                role="banner" 
                display="flex" 
                mx="auto"
                justifyContent="center"
                maxWidth={500}>
                  <CaptureImg />
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
                  <IngredientsList
                  ingredientsList={ingredientsList}
                  onClick={id => this.deleteIngredient(id)}/>
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
              isLoading={loading}> 
                <Results 
                results={results}
                message={message}
                error={error}/>
                <Navigation 
                visible={results.length > 0 ? true : false}
                onClick={e => this.navigatePage(e)}/>
              </Loading>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;
