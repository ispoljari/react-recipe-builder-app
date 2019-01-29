import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}
  body {
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
