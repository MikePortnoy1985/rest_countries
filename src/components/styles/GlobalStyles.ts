import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 560px) {
    font-size: 14px;
    line-height: 1.2;
  }
}

body {
  overflow-X: hidden;
}
`;

export default GlobalStyles;
