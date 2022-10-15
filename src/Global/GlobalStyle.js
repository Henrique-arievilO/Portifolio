import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: var(--colorBlack);
    }

    :root{
        --colorBlack: #000;
        --colorViolet: #2c062c;
        --colorMagenta:  #ff1a59;
        --colorPurple: #840084;
        --colorCyan:  #0aeff0;
        --colorWhite: #fff;

        --primaryFont: 'Baloo 2', cursive;
        --secundaryFont: 'Inter', sans-serif;
        --actionFont: 'Josefin Sans', sans-serif;
    }
`