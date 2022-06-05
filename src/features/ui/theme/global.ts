import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle` 


*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
}
html,
body, #__next {
    padding: 0;
    height: 100%;
}

body {
    font-weight: 400;
    font-family: ${typography.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    background-color: ${colors.background.black};
    color: ${colors.text.primary};
}

a {
    color: inherit;
    text-decoration: none;
}

`
