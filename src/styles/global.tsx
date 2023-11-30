import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* outline: 5px solid red ; */
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

    html {
        min-height: 100vh;
    }

    body {
        min-height: 100vh;
        font-family: jura,sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: initial;
        }
    }

 
    img {
        border-style: none;
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    input, input:focus, input:hover,
    textarea, textarea:focus, textarea:hover {
        outline: none;
        border: none;
    }

`;

export { GlobalStyle };
