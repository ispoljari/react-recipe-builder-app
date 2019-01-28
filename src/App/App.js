import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
} from '@smooth-ui/core-sc';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';
import Loading from 'react-loading-animation';

import {
  WrappedTitle,
  WrappedSearchRecipes,
  WrappedIngredientsList,
  WrappedInputIngredient,
  WrappedResults,
  WrappedNavigation,
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
    a11yIngredients,
    a11yResults,
  } = appState;

  return (
    <LiveAnnouncer>
      <Grid>
        <Row
          display="flex"
          alignItems="center"
        >
          <Col>
            <WrappedTitle />
            <WrappedCaptureImg
              onChange={previewCapturedImg}
              onClick={removeCapturedImg}
              capturedImg={capturedImg}
              loadingRecipes={loadingRecipes}
              loadingPredictions={loadingPredictions}
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
              <LiveMessage
                message={a11yIngredients}
                aria-live="assertive"
              />
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
              <LiveMessage
                message={a11yResults}
                aria-live="assertive"
              />
              <WrappedResults
                results={results}
                ingredientsList={ingredientsList}
                message={message}
                error={error}
              />
              {(results.length > 0 && !message && !error)
                ? (
                  <WrappedNavigation
                    onClick={navigatePage}
                  />
                ) : ''}
            </Loading>
          </Col>
        </Row>
      </Grid>
    </LiveAnnouncer>
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
    error: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    capturedImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
