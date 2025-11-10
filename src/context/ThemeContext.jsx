// /src/app/UserContext.js

// import context needs and state needs from react
import { createContext, useContext } from "react";
import { useState } from "react";

// initiat context variable and add value
const ThemeContext = createContext("light");

// Provider Function to nest in app elements needing context later
export function ThemeProvider({ children }) {
  const { theme, setTheme } = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook so context can be easily used. inlc. any sub-elements (state variable, mutation function...)

export function useTheme() {
  // custom hook already calls  useContext hook and makes ThemeContext available to be used
  return useContext(ThemeContext);
}
