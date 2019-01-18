import React, { Component } from 'react';

import { 
  Title, 
  SearchRecipes, 
  IngredientsList, 
  InputIngredient,
  Results } from '../components';

import { 
  Grid, 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';

const INITIAL_STATE = {
  error: null,
  results: [],
  page: 1,
  loading: false,
  ingredientsList: []
}

class App extends Component {
  state = {...INITIAL_STATE};

  updateSelectedIngredients = ingredient => {
    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList, ingredient]
    })
    );
  }

  deleteIngredient = id => {
    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList.filter(item => item.id !== id)]
    })
    );
  }

  updateLoadingStatus = status => {
    this.setState({
      loading: status
    });
  }

  receiveResults = results => {
    this.setState(prevState => ({
      results: [...prevState.results, ...results],
      })
    );
  }

  receiveError = error => {
    this.setState({
      error: 'Could not load recipes',
    });
  }

  render() {
    const { ingredientsList, results, page } = this.state;
    // const resultsDeepCopy = JSON.parse(JSON.stringify(results));
    // const numResults = resultsDeepCopy.length;
    // const numRowsWhole = Math.floor(numResults / 3);
    // const numRowsPartial = numRowsWhole + 1;

    // for (let i = 0; i<numRowsPartial; i++) {
    //   for (let j = 0; i<3; i++) {

    //   }
    // }

    return (
      <Grid>
      <Row my={30}>
        <Col>
          <Box 
          as="header" 
          role="banner" 
          display="flex" 
          mx="auto"
          justifyContent="center"
          maxWidth={300}>
            <Title />
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
          <InputIngredient 
            harvestIngredient={result => this.updateSelectedIngredients(result)}/>
          </Box>
        </Col>
      </Row>
      <Row my={10}>
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
      <Row>
        <Col>
          <Box 
          as="section" 
          role="region" 
          mx="auto"
          maxWidth= {300}
          >
           <SearchRecipes 
            updateLoadingStatus={status => this.updateLoadingStatus(status)}
            receiveResults = {results => this.receiveResults(results)}
            receiveError = {error => this.receiveError(error)}
            ingredientsList={ingredientsList}
            page={page}/>
          </Box>
        </Col>
      </Row>
      <Row 
      my={30}>
        <Col>
          <Box 
          as="main" 
          role="main" 
          >
            <Results />
          </Box>
        </Col>
      </Row>
      </Grid>
    );
  }
};

export default App;
