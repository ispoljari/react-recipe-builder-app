import React, { Component } from 'react';

import { Grid, Row, Col } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <div>
              <h1>Hello World!</h1>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;