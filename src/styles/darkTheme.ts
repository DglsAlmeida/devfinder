import { theme } from "./defaultTheme";

export const darkTheme = {
  colors: {
    primary: '#0079FF',
    background: '#141D2F',
    body: '#1E2A47',
    text: '#FFFFFF',
    grayLight: '#FFFFFF',
    buttonText: "#FFFFFF",
    description: '#FFFFFF',
    ...theme.colors,
  },
  screens: {...theme.screens},
}

