// - We use this Providers function in our layout.js

"use client";

//import  Provider set up in your context file
import { ThemeProvider } from "@/context/ThemeContext";

//declare Providers function to contain any Provider that is set up
export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
