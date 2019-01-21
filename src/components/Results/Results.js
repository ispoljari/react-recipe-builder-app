import React from 'react';

import { 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';

import uuidv4 from 'uuid/v4';

const wrapContentIntoColumn = content => (
  <Col 
  xs={12} 
  md={4} 
  mb={20}
  key={uuidv4()}>
    <Box border={1} p={20}>
      {content}
    </Box>
  </Col>
);

const wrapColumnsIntoRow = columns => (
  <Row key={uuidv4()}>
    {columns}
  </Row>
);


const Results = ({results}) => {
  let rowContent = [];
  let gridWrapper = [];

  const grid = results.map((result, index) => {
    rowContent.push(wrapContentIntoColumn(index));

    if ((index + 1) % 3 === 0) {
      gridWrapper.push(wrapColumnsIntoRow(rowContent));
      rowContent = [];
    }

    if (index === results.length - 1) {
      gridWrapper.push(wrapColumnsIntoRow(rowContent));
      return gridWrapper;
    }
  });
  
  return (
    <React.Fragment>
      {grid}
    </React.Fragment>
  );
};

export default Results;