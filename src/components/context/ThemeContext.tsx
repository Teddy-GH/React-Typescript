import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children : React.ReactNode
}

// create a new ThemeContext
export const ThemeContext = createContext(theme);    

// create a ThemeContext provider
export const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}