import React from 'react';
import {
  Row,
  Col,
  Box,
} from '@smooth-ui/core-sc';

const withRowContent = setup => (WrappedComponent) => {
  const { rowMargin, boxConfig } = setup;

  const HOSFC = props => (
    <Row
      {...rowMargin}
    >
      <Col>
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
