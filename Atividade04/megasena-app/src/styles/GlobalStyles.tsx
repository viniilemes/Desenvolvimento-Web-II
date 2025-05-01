// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: ${(props) => props.theme.background || "#fff"};
    color: ${(props) => props.theme.text || "#000"};
  }
`;

export default GlobalStyles;
