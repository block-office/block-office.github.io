export enum ColorKey {
  Primary1A = "Primary1A",
  Primary1B = "Primary1B",
  Primary2A = "Primary2A",
  Primary2B = "Primary2B",
  Background = "Background",
  Background2 = "Background2",
  NoticePrimary = "NoticePrimary",
  NoticeBackground = "NoticeBackground",
  Success = "Success"
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
  Primary1A: "#FFFFFF",
  Primary1B: "#CED3E4",
  Primary2A: "#15214B",
  Primary2B: "#656D8C",
  Background: "#15214B",
  Background2: "#FFFFFF",
  NoticePrimary: "#000000",
  NoticeBackground: "#ECD444",
  Success: "#1FFF78"
};

export const DARK_COLORS: ColorPalette = {
  Primary1A: "#FFFFFF",
  Primary1B: "#CED3E4",
  Primary2A: "#FFFFFF",
  Primary2B: "#CED3E4",
  Background: "#15214B",
  Background2: "#24387F",
  NoticePrimary: "#000000",
  NoticeBackground: "#EBCF33",
  Success: "#1FFF78"
};

export function getColor(colorKey: keyof ColorPalette) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
