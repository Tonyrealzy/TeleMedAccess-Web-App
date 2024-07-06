import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./baseTheme";

export const ThemeCreator = ({ query, children }) => {
  if (!query) {
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
  }

  const primaryColor = query.primaryColor;

  const theme = primaryColor
    ? { ...baseTheme, primaryColor: `#${primaryColor}` }
    : baseTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
