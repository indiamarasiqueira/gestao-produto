import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
   html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        min-height: 100%;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f3f3f3;
        color: #707070;
    }
`;
export default GlobalStyle;
