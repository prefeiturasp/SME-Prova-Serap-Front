import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *,
  html,
  body {
    font-family: 'Poppins', sans-serif;
    input {
    -webkit-background-clip: text !important;
    }
  }
`;
