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

class App extends Component {
  state = {
    ingredients: []
  };

  updateSelectedIngredients = ingredient => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, ingredient]
    })
    );
  }

  deleteIngredient = id => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients.filter(item => item.id !== id)]
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
            ingredients={this.state.ingredients}
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
            ingredients={this.state.ingredients}
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
