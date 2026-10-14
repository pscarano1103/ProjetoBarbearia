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
    html{
        scroll-behavior: smooth;
    }
    button, a{
        cursor: pointer;
        border: none;
        text-decoration:none;
    }

    .container{
        display: flex;
        width: 100%;
    }

`;

export default globalStyles;
