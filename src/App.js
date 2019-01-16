import React, { Component } from 'react';

import { Title } from './components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row my={20}>
          <Col>
            <header role="Banner">
              <Title/>
            </header>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;