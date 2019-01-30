import React from 'react';
import uuidv4 from 'uuid/v4';
import {
  Row,
  Col,
  Box,
  Typography,
} from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

import withRowContent from '../../hocs/RowContent';
import * as Styled from './Results.style';

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
        textAlign="center"
        lineHeight={1.5}
        mx="auto"
        maxWidth={400}
        width={0.9}
        letterSpacing={1.5}
        fontSize={{ xs: 18, lg: 20 }}
        fontWeight="normal"
      >
        {feedback}
      </Typography>
    </Col>
  </Row>
);

const wrapContentIntoColumn = (content) => {
  const ingredients = content.ingredients.map(item => (
    <Styled.ListItem
      key={uuidv4()}
      color={item.chosen ? 'red' : 'black'}
    >
      {item.value}
    </Styled.ListItem>
  ));

  return (
    <Col
      xs={12}
      md={4}
      mb={20}
      key={uuidv4()}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        p={15}
        borderRadius={5}
        border="1px solid #c5c7ca"
      >
        <Styled.Link
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={content.thumbnail}
            alt={content.title}
          />
        </Styled.Link>
        <Box
          ml={20}
          overflow="-webkit-paged-y"
        >
          <Styled.Link
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              variant="h3"
              fontSize={{ xs: 24, lg: 28 }}
              color="black"
            >
              {content.title}
            </Typography>
          </Styled.Link>
          <Typography
            variant="h4"
            fontSize={{ xs: 18, lg: 20 }}
            color="black"
            mb={0}
          >
            Ingredients:
          </Typography>
          <hr />
          <Styled.List>
            {ingredients}
          </Styled.List>
        </Box>
      </Box>
    </Col>
  );
};

const Results = ({
  results, error, message,
}) => {
  const gridWrapper = [];
  let rowContent = [];
  let grid;


  if (results.length > 0) {
    results.forEach((result, index) => {
      rowContent.push(wrapContentIntoColumn(result));
      if ((index + 1) % 3 === 0) {
        gridWrapper.push(wrapColumnsIntoRow(rowContent));
        rowContent = [];
      }
      if (index === results.length - 1) {
        gridWrapper.push(wrapColumnsIntoRow(rowContent));
        grid = gridWrapper;
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

Results.propTypes = {
  results: PropTypes.arrayOf(Object).isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
};

Results.defaultProps = {
  error: '',
  message: '',
};

const rowContentSetup = {
  rowConfig: {
    mt: '50px',
    mb: '10px',
  },
  colConfig: {},
  boxConfig: {
    as: 'main',
    role: 'main',
  },
};

const WrappedResults = withRowContent(rowContentSetup)(Results);

export default WrappedResults;
