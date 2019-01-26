import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
  Box,
} from '@smooth-ui/core-sc';
import Loading from 'react-loading-animation';

import {
  WrappedTitle,
  SearchRecipes,
  IngredientsList,
  InputIngredient,
  Results,
  Navigation,
  CaptureImg,
} from '../components';


const App = ({
  appState,
  handleChange,
  handlePress,
  handleSubmit,
  previewCapturedImg,
  removeCapturedImg,
  deleteIngredient,
  navigatePage,
}) => {
  const {
    ingredientsList,
    results,
    value,
    loadingRecipes,
    loadingPredictions,
    error,
    message,
    capturedImg,
  } = appState;

  return (
    <Grid>
      <Row
        display="flex"
        alignItems="center"
        mt={{ xs: '10%', lg: '5%' }}
      >
        <Col>
          <WrappedTitle />
          <Row
            mb={15}
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
                <CaptureImg
                  onChange={previewCapturedImg}
                  onClick={removeCapturedImg}
                  capturedImg={capturedImg}
                />
              </Box>
            </Col>
          </Row>
          <Row
            my={10}
          >
            <Col>
              <Box
                as="section"
                role="region"
                mx="auto"
                maxWidth={300}
              >
                <InputIngredient
                  onChange={handleChange}
                  onKeyDown={handlePress}
                  value={value}
                />
              </Box>
            </Col>
          </Row>
          <Row
            my={10}
          >
            <Col>
              <Box
                as="section"
                role="region"
                mx="auto"
                maxWidth={300}
              >
                <SearchRecipes
                  handleSubmit={handleSubmit}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box
                as="section"
                role="region"
                mx="auto"
                maxWidth={300}
              >
                <Loading
                  isLoading={loadingPredictions}
                >
                  <IngredientsList
                    ingredientsList={ingredientsList}
                    onClick={deleteIngredient}
                  />
                </Loading>
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        my={30}
      >
        <Col>
          <Box
            as="main"
            role="main"
          >
            <Loading
              isLoading={loadingRecipes}
            >
              <Results
                results={results}
                ingredientsList={ingredientsList}
                message={message}
                error={error}
              />
              {(results.length > 0 && !message && !error)
                ? (
                  <Navigation
                    onClick={navigatePage}
                  />
                ) : ''
              }
            </Loading>
          </Box>
        </Col>
      </Row>
    </Grid>
  );
};

App.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handlePress: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previewCapturedImg: PropTypes.func.isRequired,
  removeCapturedImg: PropTypes.func.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
  navigatePage: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    ingredientsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    results: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.string.isRequired,
    loadingRecipes: PropTypes.bool.isRequired,
    loadingPredictions: PropTypes.bool.isRequired,
    error: PropTypes.string,
    message: PropTypes.string,
    capturedImg: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  appState: {
    error: '',
    message: '',
  },
};

export default App;
