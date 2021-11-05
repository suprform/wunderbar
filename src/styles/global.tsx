import React from 'react'
import { css, Global } from '@emotion/react'
import { fonts, body, weight } from './font'
import color from './colors'

const fallbackFonts = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${fonts.monteserrat};
        font-style: normal;
        font-weight: normal;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap');
      }

      * {
        ${body};
        font-family: ${fonts.monteserrat}, ${fallbackFonts};
        font-weight: ${weight.medium};
        box-sizing: border-box;
        color: ${color.primary};
        text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;
        font-variant-ligatures: common-ligatures;
        padding: 0;
        margin: 0;
        transition: 0.2s cubic-bezier(0.2, 0.2, 0.38, 0.9);
      }
    `}
  />
)

export default GlobalStyles
