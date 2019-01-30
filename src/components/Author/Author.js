import React from 'react';
import { Typography, Box } from '@smooth-ui/core-sc';

import withRowContent from '../../hocs/RowContent';
import linkedinLogo from '../../svg/linkedin.svg';
import githubLogo from '../../svg/github.svg';
import * as Styled from './Author.style';

const Author = () => (
  <Box>
    <Styled.Author>
      <Typography variant="h4" textAlign="center" fontSize={20}>
        <small>Developed by</small>
        {' '}
        <strong>Ivan Špoljarić</strong>
      </Typography>
    </Styled.Author>
    <Styled.Social>
      <Styled.LinkedIn>
        <a href="https://www.linkedin.com/in/ivan-špoljarić-2206a184" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo small icon" />
        </a>
      </Styled.LinkedIn>
      <Styled.Github>
        <a href="https://github.com/ispoljari" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github logo small icon" />
        </a>
      </Styled.Github>
    </Styled.Social>
  </Box>
);

const rowContentSetup = {
  rowConfig: {
    mb: '20px',
  },
  colConfig: {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
  },
  boxConfig: {
    as: 'footer',
    role: 'contentinfo',
    display: 'flex',
    mx: 'auto',
    justifyContent: 'center',
  },
};

const WrappedAuthor = withRowContent(rowContentSetup)(Author);

export default WrappedAuthor;
