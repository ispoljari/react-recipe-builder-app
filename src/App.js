import React, { Component } from 'react';

import { Title, Form } from './components';
import { Grid, Row, Col, Box } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row my={20}>
          <Col>
            <Box as="header" role="banner">
              <Title/>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box as="section" role="region">
              <Form/>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;