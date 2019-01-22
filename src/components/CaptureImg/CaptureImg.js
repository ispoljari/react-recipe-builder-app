import React from 'react';

import camera from '../../svg/camera.svg';
import { Box } from '@smooth-ui/core-sc';

import * as Styled from './CaptureImg.style';

const CaptureImg = ({onChange, capturedImg}) => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center">
      <Styled.Img 
      src={camera} 
      alt="Camera icon" />
      <input 
      type="file" 
      name="image" 
      accept="image/*" 
      capture="environment"
      onChange={e => onChange(e)} />
      <Styled.Img 
      src={capturedImg} 
      alt="Camera icon" />
    </Box>
  )
}

export default CaptureImg;