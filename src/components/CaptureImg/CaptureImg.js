import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

import withRowContent from '../../hocs/RowContent';
import * as Styled from './CaptureImg.style';

const CaptureImg = ({
  onChange, capturedImg, onClick, loadingRecipes,
  loadingPredictions, setRef,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Styled.Input
      aria-label="Capture image"
      aria-hidden="true"
      disabled={loadingRecipes || loadingPredictions}
      show={!capturedImg}
      type="file"
      name="image"
      accept="image/*"
      capture="environment"
      onChange={onChange}
    />
    <div ref={setRef} />
    <Box
      position="relative"
    >
      <Styled.Img
        src={capturedImg}
        alt="Camera icon"
        aria-hidden="true"
        maxWidth="400px"
        show={!!capturedImg}
      />
      <Styled.Button
        show={!!capturedImg}
        type="button"
        name="remove"
        aria-label="Remove image"
        aria-hidden="true"
        onClick={onClick}
      >
        &times;
      </Styled.Button>
    </Box>
  </Box>
);

CaptureImg.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  capturedImg: PropTypes.string.isRequired,
  loadingPredictions: PropTypes.bool.isRequired,
  loadingRecipes: PropTypes.bool.isRequired,
  setRef: PropTypes.instanceOf(Object).isRequired,
};

const rowContentSetup = {
  rowConfig: {
    my: '40px',
  },
  colConfig: {
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  boxConfig: {
    as: 'section',
    role: 'region',
    display: 'flex',
    mx: 'auto',
    justifyContent: 'center',
    maxWidth: '500px',
  },
};

const WrappedCaptureImg = withRowContent(rowContentSetup)(CaptureImg);

export default WrappedCaptureImg;
