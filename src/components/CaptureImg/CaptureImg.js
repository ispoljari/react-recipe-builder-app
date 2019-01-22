import React from 'react';

import camera from '../../svg/camera.svg';
import { Box } from '@smooth-ui/core-sc';

import * as Styled from './CaptureImg.style';

const CaptureImg = ({onChange, capturedImg}) => (
  <Box
  display="flex"
  flexDirection="column"
  alignItems="center">
    {/* <Styled.Img 
    src={camera} 
    alt="Camera icon" /> */}
    <Styled.Input
    type="file" 
    name="image" 
    accept="image/*" 
    capture="environment"
    onChange={onChange} />
     <Styled.Img 
    src={capturedImg} 
    alt="Camera icon"
    width="400px" />
  </Box>
);

export default CaptureImg;