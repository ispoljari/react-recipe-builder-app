import React from 'react';

import { 
  Row, 
  Col, 
  Box,
  Typography } from '@smooth-ui/core-sc';

import * as Styled from './Results.style';

import uuidv4 from 'uuid/v4';

const wrapContentIntoColumn = content => (
  <Col 
  xs={12} 
  md={4} 
  mb={20}
  key={uuidv4()}>
    <Styled.link 
    href={content.href}
    target="_blank"
    rel="noopener noreferrer">
      <Box
      display="flex"
      alignItems="center"
      p={15}
      borderRadius={5}
      border="1px solid #c5c7ca">
        <img 
        src={content.thumbnail} 
        alt={content.title}/>
        <Typography 
        variant="h3"
        fontSize={{xs: 18, lg: 20}}
        color="black"
        ml={20}>
          {content.title}
        </Typography>
      </Box>
    </Styled.link>
  </Col>
);

const wrapColumnsIntoRow = columns => (
  <Row key={uuidv4()}>
    {columns}
  </Row>
);

const generateFeedback = feedback => (
  <Row>
    <Col>
      <Typography 
      variant="h3" 
      textAlign="justify"
      mx="auto"
      maxWidth={400}
      width={0.9}
      letterSpacing={1.5}
      fontSize={{xs: 18, lg: 20}}
      fontWeight="normal">
        {feedback}
      </Typography>
    </Col>
  </Row>
);


const Results = ({results, error, message}) => {
  let rowContent = [];
  let gridWrapper = [];
  let grid;

  if (results.length > 0) {
    grid = results.map((result, index) => {
      rowContent.push(wrapContentIntoColumn(result));
  
      if ((index + 1) % 3 === 0) {
        gridWrapper.push(wrapColumnsIntoRow(rowContent));
        rowContent = [];
      }
  
      if (index === results.length - 1) {
        gridWrapper.push(wrapColumnsIntoRow(rowContent));
        return gridWrapper;
      }
    });
  } 
  
  if (error) {
    grid = generateFeedback(error);
  } else if (message) {
    grid = generateFeedback(message);
  }
  
  return (
    <React.Fragment>
      {grid}
    </React.Fragment>
  );
};

export default Results;