import { theme } from "./defaultTheme";

export const lightTheme = {
  colors: {
    primary: '#0079FF',
    background: '#F6F8FF',
    body: '#FEFEFE',
    text: '#222731',
    grayLight: '#697C9A',
    buttonText: "#FFFFFF",
    description: '#4B6A9B',
    ...theme.colors,
  }, 
  screens: {
    ...theme.screens,
  }
}