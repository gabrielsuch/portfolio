import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle `
    :root {
        --color-brown-50: #402F32;
        --color-brown-100: #2F2325;
    }

    * {
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }
`