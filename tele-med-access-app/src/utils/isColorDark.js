import { baseTheme } from "../styles/baseTheme";


export const isColorDark = (hexCode) => {
  // Remove the # symbol from the hex code
  const cleanedHexCode = hexCode.replace("#", "");

  // Convert the hex code to RGB values
  const red = parseInt(cleanedHexCode.slice(0, 2), 16);
  const green = parseInt(cleanedHexCode.slice(2, 4), 16);
  const blue = parseInt(cleanedHexCode.slice(4, 6), 16);

  // Calculate the relative luminance of the color
  const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

  // Determine if the color is dark or light based on the luminance

  return luminance <= 0.5
    ? baseTheme.colors.lightText
    : baseTheme.colors.darkText;
};
