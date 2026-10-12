import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: ${(props) => props.theme.defaultFont};
        font-weight: 400;
    }

    button, a{
        cursor: pointer;
        border: none;
        text-decoration:none;
    }

`;

export default globalStyles;
