import React, { Component } from 'react';
import {
  Row,
  Col,
  Box,
} from '@smooth-ui/core-sc';

const withRowContent = (WrappedComponent) => {
  const HOC = props => (
    <Row
      mb={10}
    >
      <Col>
        <Box
          as="header"
          role="banner"
          display="flex"
          mx="auto"
          justifyContent="center"
          maxWidth={500}
        >
          <WrappedComponent {...props} />
        </Box>
      </Col>
    </Row>
  );

  return HOC;
};

export default withRowContent;
