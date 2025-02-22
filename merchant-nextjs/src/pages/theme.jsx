'use client';

import { useState, createContext } from "react";
import Home from "./home";

// Create ThemeContext
export const ThemeContext = createContext();

export default function Theme() {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme}}>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
      <Home />
    </ThemeContext.Provider>
  );
}
