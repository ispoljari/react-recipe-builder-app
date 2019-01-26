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
  WrappedSearchRecipes,
  WrappedIngredientsList,
  WrappedInputIngredient,
  WrappedResults,
  Navigation,
  WrappedCaptureImg,
} from '../components';


const App = (props) => {
  const {
    appState,
    handleChange,
    handlePress,
    handleSubmit,
    previewCapturedImg,
    removeCapturedImg,
    deleteIngredient,
    navigatePage,
  } = props;

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
          <WrappedCaptureImg
            onChange={previewCapturedImg}
            onClick={removeCapturedImg}
            capturedImg={capturedImg}
          />
          <WrappedInputIngredient
            onChange={handleChange}
            onKeyDown={handlePress}
            value={value}
          />
          <WrappedSearchRecipes
            handleSubmit={handleSubmit}
          />
          <Loading
            isLoading={loadingPredictions}
          >
            <WrappedIngredientsList
              ingredientsList={ingredientsList}
              onClick={deleteIngredient}
            />
          </Loading>
        </Col>
      </Row>
      <Row
        my={10}
      >
        <Col>
          <Loading
            isLoading={loadingRecipes}
          >
            <WrappedResults
              results={results}
              ingredientsList={ingredientsList}
              message={message}
              error={error}
            />
          </Loading>
        </Col>
      </Row>
    </Grid>
  );
};

// {(results.length > 0 && !message && !error)
//   ? (
//     <Navigation
//       onClick={navigatePage}
//     />
//   ) : ''
// }

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
