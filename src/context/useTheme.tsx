import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";

type ThemeProviderProps = {
  children: ReactNode;
}

type ThemeTypes = 'dark' | 'light'

type ThemeContextData = {
  selectedTheme: ThemeTypes
  handleThemeChange: (theme: ThemeTypes) => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProviderContext = ({ children }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeTypes>('dark');
  
  const handleThemeChange = (theme: ThemeTypes) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme")!);
   
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ selectedTheme, handleThemeChange }}>
      <ThemeProvider theme={selectedTheme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext);