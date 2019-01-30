import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row,
  Col,
} from '@smooth-ui/core-sc';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';
import Loading from 'react-loading-animation';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollToComponent from 'react-scroll-to-component';

import {
  WrappedTitle,
  WrappedSubTitle,
  WrappedInstructions,
  WrappedImage,
  WrappedSearchRecipes,
  WrappedIngredientsList,
  WrappedInputIngredient,
  WrappedResults,
  WrappedNavigation,
  WrappedCaptureImg,
  WrappedAuthor,
} from './components';
import meal from './img/meal.jpg';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.cameraRef = React.createRef();
  }

  scrollToCameraInput = () => {
    scrollToComponent(this.cameraRef.current, {
      duration: 1400,
    });
  }

  render() {
    const {
      appState,
      handleChange,
      handlePress,
      handleSubmit,
      previewCapturedImg,
      removeCapturedImg,
      deleteIngredient,
      navigatePage,
    } = this.props;

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
      firstIngredientLoaded,
      firstResultLoaded,
    } = appState;

    return (
      <LiveAnnouncer>
        <Grid>
          <Row
            display="flex"
            alignItems="center"
          >
            <Col>
              <WrappedTitle
                variant="h1"
                color="white"
                text="THE RECIPE BUILDER APP"
                textAlign="left"
                fontSizeXS={50}
                fontSizeLG={80}
                onClick={this.scrollToCameraInput}
              />
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                offset={230}
              >
                <WrappedSubTitle
                  variant="h2"
                  color="black"
                  text="if you're looking for some inspiration for your next meal..."
                  textAlign="center"
                  fontSizeXS={40}
                  fontSizeLG={60}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                offset={230}
              >
                <WrappedImage
                  imgSrc={meal}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                offset={230}
              >
                <WrappedSubTitle
                  variant="h2"
                  color="black"
                  text="...then you've definitely come to the right place"
                  textAlign="center"
                  fontSizeXS={40}
                  fontSizeLG={60}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                offset={230}
              >
                <WrappedInstructions
                  variant="h2"
                  color="black"
                  text="to find some recipes, just take a picture of the ingredients you have available"
                  textAlign="center"
                  fontSizeXS={40}
                  fontSizeLG={60}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                offset={230}
              >
                <WrappedCaptureImg
                  onChange={previewCapturedImg}
                  onClick={removeCapturedImg}
                  capturedImg={capturedImg}
                  loadingRecipes={loadingRecipes}
                  loadingPredictions={loadingPredictions}
                  setRef={this.cameraRef}
                />
              </ScrollAnimation>
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
              {firstIngredientLoaded ? (
                <React.Fragment>
                  <WrappedInputIngredient
                    onChange={handleChange}
                    onKeyDown={handlePress}
                    value={value}
                  />
                  <WrappedSearchRecipes
                    handleSubmit={handleSubmit}
                  />
                </React.Fragment>
              ) : ''}
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
                {firstResultLoaded ? (
                  <React.Fragment>
                    {(results.length > 0 || message || error) ? (
                      <WrappedResults
                        results={results}
                        ingredientsList={ingredientsList}
                        message={message}
                        error={error}
                      />
                    ) : ''}
                    {(results.length > 0 && !message && !error ? (
                      <WrappedNavigation
                        onClick={navigatePage}
                      />
                    ) : '')}
                  </React.Fragment>
                ) : ''}
              </Loading>
            </Col>
          </Row>
          <Row>
            <Col>
              <WrappedAuthor />
            </Col>         
          </Row>
        </Grid>
      </LiveAnnouncer>
    );
  }
}

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
