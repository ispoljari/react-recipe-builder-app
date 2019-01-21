import React from 'react';

import { 
  Row, 
  Col, 
  Box } from '@smooth-ui/core-sc';

import uuidv4 from 'uuid/v4';

const Results = ({results}) => {
    const resultsDeepCopy = JSON.parse(JSON.stringify(results));

    let rowContent = [];
    let rowWrapper = [];
    let gridWrapper = [];

    const wrapContentInColumn = (rowContent, index) => {
      rowContent.push(
        <Col 
        xs={12} 
        md={4} 
        key={uuidv4()}>
          <Box border={1} p={20}>
            {index}
          </Box>
        </Col>
        );
    }

    const wrapColumnsInRow = (rowWrapper, rowContent) => {
      rowWrapper.push(
        <Row key={uuidv4()}>
          {rowContent}
        </Row>
        );
    };

    const wrapRowsInGrid = (gridWrapper, rowWrapper) => {
      gridWrapper.push(rowWrapper);
    };

    const grid = resultsDeepCopy.map((result, index) => {

      wrapContentInColumn(rowContent, index);

      if ((index + 1) % 3 === 0) {
        wrapColumnsInRow(rowWrapper, rowContent);
        wrapRowsInGrid(gridWrapper, rowWrapper);
        
        rowContent = [];
        rowWrapper = [];
      }

      if (index === resultsDeepCopy.length - 1) {
        wrapColumnsInRow(rowWrapper, rowContent);
        wrapRowsInGrid(gridWrapper, rowWrapper);

        return gridWrapper;
      }
    });
  
  return (
    <React.Fragment>
      {grid}
      {/* <Row>
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
      </Row> */}
    </React.Fragment>
  );
};

export default Results;