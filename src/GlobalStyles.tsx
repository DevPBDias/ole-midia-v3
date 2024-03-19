import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default GlobalStyle;
