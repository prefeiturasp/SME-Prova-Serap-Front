import { createGlobalStyle } from 'styled-components';
import './poppins.css';

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
