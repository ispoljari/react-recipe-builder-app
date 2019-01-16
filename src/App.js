import React, { Component } from 'react';

import { Title, Form } from './components';
import { Grid, Row, Col, Box } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row my={30}>
          <Col>
            <Box 
            as="header" 
            role="banner" display="flex" justifyContent="center">
              <Title/>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box 
            as="section" 
            role="region" display="flex" justifyContent="center">
             <Form/>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;