import React from 'react';

import { Box, Typography } from '@smooth-ui/core-sc';
import * as Styled from './CaptureImg.style';
import { css }from 'styled-components';

const CaptureImg = ({onChange, capturedImg}) => (
  <Box
  display="flex"
  flexDirection="column"
  alignItems="center">
    <Styled.Input
    show={capturedImg ? false : true}
    type="file" 
    name="image" 
    accept="image/*" 
    capture="environment"
    onChange={onChange} />
     <Styled.Img 
    src={capturedImg} 
    alt="Camera icon"
    maxWidth="400px"
    show={capturedImg ? true : false} />
    <Typography 
    display= {capturedImg ? "none" : "block" }
    variant="h2" 
    textAlign="left" 
    fontSize={{xs: 22, md: 24}} 
    fontWeight="bold" 
    lineHeight={1.5} 
    m={0} px={18} 
    mt={20} 
    letterSpacing={1.5}>
      OR 
    </Typography>
  </Box>
);

export default CaptureImg;