import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
      margin: 0;
      padding: 0;
        box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: 'Noto Sans KR', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #fff;
    }
    button {
      background: transparent;
      border: none;
    }
`;

export default GlobalStyles;
