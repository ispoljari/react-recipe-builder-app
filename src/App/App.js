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

import uuidv4 from 'uuid/v4';

const INITIAL_STATE = {
  error: null,
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
 
    this.setState({
      value
    }, () => {
      if (value.includes(','))  {
        this.updateState(value, 'change');
      } 
    });
  } 

  handlePress = e => {
    const value = this.state.value;

    if (e.key === 'Enter') {
      this.updateState(value, 'press');
    }
  }

  updateState = (value, type) => {
    const ingredient = {
      value: type === 'press' ? value : value.substr(0, value.indexOf(',')),
      id: uuidv4()
    }

    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList, ingredient],
      value: ''
    })
    );
  }


  // Called from <IngredientList />
  // -------------------------------

  deleteIngredient = id => {
    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList.filter(item => item.id !== id)]
    })
    );
  }

  // Called from <SearchRecipes />
  // -------------------------------

  updateLoadingStatus = status => {
    this.setState({
      loading: status
    });
  }

  receiveResults = results => {
    this.setState(() => ({
      results: [...results]
      })
    );
    console.log(results);
  }

  receiveError = error => {
    this.setState({
      error: 'Could not load recipes',
    });
  }

  render() {
    const { 
      ingredientsList, 
      results, 
      value, 
      page } = this.state;

    return (
      <Grid>
      <Row 
      my={20}>
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
            updateLoadingStatus={status => this.updateLoadingStatus(status)}
            receiveResults = {results => this.receiveResults(results)}
            receiveError = {error => this.receiveError(error)}
            ingredientsList={ingredientsList}
            page={page}/>
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
      <Row 
      my={20}>
        <Col>
          <Box 
          as="main" 
          role="main" 
          >
            <Results 
            results={results}/>
          </Box>
        </Col>
      </Row>
      </Grid>
    );
  }
};

export default App;
