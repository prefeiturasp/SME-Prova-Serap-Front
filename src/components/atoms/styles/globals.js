import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *,
  html,
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    input {
    -webkit-background-clip: text !important;
    }
  }
`;
