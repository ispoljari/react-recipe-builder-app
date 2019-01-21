import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';

export const Global = createGlobalStyle`
  ${globalStyle()}
  {
    html, body {
      height: 100%;
    }
  }
`;