import React from 'react';
import {
  Row,
  Col,
  Box,
} from '@smooth-ui/core-sc';

const withRowContent = setup => (WrappedComponent) => {
  const { rowConfig, colConfig, boxConfig } = setup;

  const HOSFC = props => (
    <Row
      {...rowConfig}
    >
      <Col
        {...colConfig}
      >
        <Box
          {...boxConfig}
        >
          <WrappedComponent {...props} />
        </Box>
      </Col>
    </Row>
  );

  return HOSFC;
};

export default withRowContent;
