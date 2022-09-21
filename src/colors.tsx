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
  LIGHT_BLUE: "#22eedd",
  NEON_GREEN: "#00FFA3"
};

// export const LIGHT_COLORS: ColorPalette = {
//   Primary1A: "#FFFFFF",
//   Primary1B: "#CED3E4",
//   Primary2A: "#15214B",
//   Primary2B: "#656D8C",
//   Background: "#15214B",
//   Background2: "#00FFA3",
//   NoticePrimary: "#15214B",
//   NoticeBackground: "#00D1FF",
//   Success: "##00FFA3"
// };

export const DARK_COLORS: ColorPalette = {
  Primary1A: "#000000",
  Primary1B: "#CED3E4",
  Primary2A: "#FFFFFF",
  Primary2B: "#FFFFFF",
  Background: "#FFFFFF",
  Background2: "#15214B",
  NoticePrimary: "#15214B",
  NoticeBackground: "#00FFA3",
  Success: "#00FFA3"
};

export function getColor(colorKey: keyof ColorPalette) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? DARK_COLORS[colorKey] : DARK_COLORS[colorKey];
}
