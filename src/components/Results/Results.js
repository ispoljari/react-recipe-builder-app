import React from 'react';

import { 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';

const Results = () => {
  return (
    <React.Fragment>
      <Row>
        <Col 
        xs={12} 
        md={4}>
          <Box 
          backgroundColor="yellow" 
          p={20}>
            One
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="red" 
          p={20}>
            Two
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="green" 
          p={20}>
            Three
          </Box>
        </Col>
      </Row>
      <Row 
      my={20}>
        <Col 
        xs={12} 
        md={4}>
          <Box 
          backgroundColor="yellow" 
          p={20}>
            One
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="red" 
          p={20}>
            Two
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="green" 
          p={20}>
            Three
          </Box>
        </Col>
      </Row>
      <Row>
        <Col 
        xs={12} 
        md={4}>
          <Box 
          backgroundColor="yellow" 
          p={20}>
            One
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="red" 
          p={20}>
            Two
          </Box>
        </Col>
        <Col 
        xs={12} 
        md={4} 
        mt={{ xs: 20, md: 0 }}>
          <Box 
          backgroundColor="green" p={20}>
            Three
          </Box>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Results;