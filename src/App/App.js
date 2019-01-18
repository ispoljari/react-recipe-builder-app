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
            <Results />
          </Box>
        </Col>
      </Row>
      </Grid>
    );
  }
};

export default App;
