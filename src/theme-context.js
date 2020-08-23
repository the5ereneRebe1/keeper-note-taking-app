import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#f5ba13",
    secondarybackground: "#37474f"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    secondarybackground: "#eee"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
