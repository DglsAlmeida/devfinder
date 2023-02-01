import { createGlobalStyle } from "styled-components";

import { Space_Mono } from "@next/font/google";

const spaceMono = Space_Mono({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
})

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: ${spaceMono.style.fontFamily};
  }

  input, button {
    font-family: ${spaceMono.style.fontFamily};
  }
`