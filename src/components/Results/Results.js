import React from 'react';

import { 
  Row, 
  Col, 
  Box,
  Typography } from '@smooth-ui/core-sc';

import * as Styled from './Results.style';

import uuidv4 from 'uuid/v4';

const wrapContentIntoColumn = content => {
  const contentCopy = JSON.parse(JSON.stringify(content));
  console.log(contentCopy);
  const ingredients = contentCopy.ingredients.split(', ').map(item => (
      <li
      key={uuidv4()}>
        {item}
      </li>
    ));

  return (
    <Col 
    xs={12} 
    md={4} 
    mb={20}
    key={uuidv4()}>
      <Box
      display="flex"
      alignItems="flex-start"
      p={15}
      borderRadius={5}
      border="1px solid #c5c7ca">
        <Styled.Link 
        href={content.href}
        target="_blank"
        rel="noopener noreferrer">
          <img 
          src={content.thumbnail} 
          alt={content.title}/>
        </Styled.Link>
        <Box
        ml={20}
        overflow="-webkit-paged-y">
          <Styled.Link
          href={content.href}
          target="_blank"
          rel="noopener noreferrer">
            <Typography 
            variant="h3"
            fontSize={{xs: 20, lg: 22}}
            color="black">
              {content.title}
            </Typography>
          </Styled.Link>
          <Typography 
          variant="h4"
          fontSize={{xs: 16, lg: 18}}
          color="black"
          mb={0}>
            Ingredients:
          </Typography>
          <hr/>
          <Styled.List>
            {ingredients}
          </Styled.List>
        </Box>
      </Box>
    </Col>
  );
};

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
      lineHeight={1.5}
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