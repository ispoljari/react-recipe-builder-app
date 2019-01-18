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
            ingredientsList={this.state.ingredientsList}
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
            ingredientsList={this.state.ingredientsList}
            page={1}/>
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
            <Results results={this.state.results}/>
          </Box>
        </Col>
      </Row>
      </Grid>
    );
  }
};

export default App;
