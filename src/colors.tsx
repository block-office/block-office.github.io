export enum ColorKey {
  PRIMARY = "PRIMARY",
  BACKGROUND = "BACKGROUND",
  SUCCESS = "SUCCESS"
}

export type ColorPalette = {
  [key in ColorKey]: string;
};

export const COLORS = {
  NAVY: "#15214B",
  WHITE: "#FFFFFF",
  BLACK: "#000000"
};

export const LIGHT_COLORS: ColorPalette = {
  PRIMARY: "#15214B",
  BACKGROUND: "#FFFFFF",
  SUCCESS: "#1F8C1D"
};

export const DARK_COLORS: ColorPalette = {
  PRIMARY: "#6E78A6",
  BACKGROUND: "#15214B",
  SUCCESS: "#1F8C1D"
};

export function getColor(colorKey: keyof ColorPalette) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
