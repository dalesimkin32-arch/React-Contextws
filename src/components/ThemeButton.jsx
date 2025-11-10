// - Provide button with theme state using custom hook and ThemeProvider (needs "use client")
"use client";

//import custom hook

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme
      </button>
    </>
  );
}
