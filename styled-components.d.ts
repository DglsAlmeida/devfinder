import { darkTheme } from "./src/styles/darkTheme";

type Theme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}