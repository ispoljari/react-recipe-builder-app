import React, { Component } from 'react';
import { Input } from '@smooth-ui/core-sc';

import uuidv4 from 'uuid/v4';

const INITIAL_STATE = {
  value: ''
}

class InputIngredient extends Component {
  state = {...INITIAL_STATE};

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
    this.props.harvestIngredient({
      value: type === 'press' ? value : value.substr(0, value.indexOf(',')),
      id: uuidv4()
    });
    
    this.setState(INITIAL_STATE);
  }
 
  render() {
    return (
      <Input 
      type="text" 
      name="ingredients" 
      placeholder="Enter some ingredients..."
      value={this.state.value} 
      onChange={this.handleChange}
      onKeyDown={this.handlePress}
      required 
      size="md" 
      borderRadius={5} 
      fontSize={20}
      control 
      p={10}/>
    );
  }
}

export default InputIngredient;