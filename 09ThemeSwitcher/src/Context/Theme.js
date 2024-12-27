// this is the second way of context
import { createContext, useContext } from "react";
/********************here learning that if we want  to use dark or light theme in our project   darkMode:"class",
this to be included*************************/
export const ThemeContext=createContext({
    themeMode:'light',
    lightTheme:()=>{},
    darkTheme:()=>{},
})
export const ThemeProvider=ThemeContext.Provider

export default function usetheme(){
      return useContext(ThemeContext)
}