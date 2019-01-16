import React, { Component } from 'react';

import { Title, Form } from './components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row my={20}>
          <Col>
            <header role="banner">
              <Title/>
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <main role="main">
              <Form/>
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;