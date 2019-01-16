import React, { Component } from 'react';

import { Title, Form, Ingredients } from './components';
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
              <Title />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box 
            as="section" 
            role="region" display="flex" justifyContent="center">
             <Form />
            </Box>
          </Col>
        </Row>
        <Row my={30}>
          <Col>
            <Box 
            as="section" 
            role="region" 
            display="flex" 
            justifyContent="center">
             <Ingredients />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box>
              <Row>
                <Col xs={12} md={4}>
                  <Box backgroundColor="yellow" p={20}>
                    One
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="red" p={20}>
                    Two
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="green" p={20}>
                    Three
                  </Box>
                </Col>
              </Row>
              <Row my={20}>
                <Col xs={12} md={4}>
                  <Box backgroundColor="yellow" p={20}>
                    One
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="red" p={20}>
                    Two
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="green" p={20}>
                    Three
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Box backgroundColor="yellow" p={20}>
                    One
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="red" p={20}>
                    Two
                  </Box>
                </Col>
                <Col xs={12} md={4} mt={{ xs: 20, md: 0 }}>
                  <Box backgroundColor="green" p={20}>
                    Three
                  </Box>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;