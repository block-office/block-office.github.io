export enum ColorKey {
  PRIMARY = "PRIMARY",
  BACKGROUND = "BACKGROUND",
  BACKGROUND2 = "BACKGROUND2",
  SUCCESS = "SUCCESS"
}

export type ColorPalette = {
  [key in ColorKey]: string;
};

export const COLORS = {
  NAVY: "#15214B",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  LIGHT_BLUE: "#22eedd"
};

export const LIGHT_COLORS: ColorPalette = {
  PRIMARY: "#15214B",
  BACKGROUND: "#FFFFFF",
  BACKGROUND2: "#15214B",
  SUCCESS: "#1F8C1D"
};

export const DARK_COLORS: ColorPalette = {
  PRIMARY: "#FFFFFF",
  BACKGROUND: "#15214B",
  BACKGROUND2: "#6E78A6",
  SUCCESS: "#1F8C1D"
};

export function getColor(colorKey: keyof ColorPalette) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
