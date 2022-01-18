import { ThemeProvider } from "@emotion/react";

type ColorPalette = {
  light_1: string;
  light_2: string;
  light_3: string;
  base: string;
  dark_1: string;
  dark_2: string;
  dark_3: string;
};

export interface ITheme {
  colors: {
    primary: ColorPalette;
  };
}

export const defaultTheme: ITheme = {
  colors: {
    primary: {
      light_1: "#98ECFE",
      light_2: "#60CCFE",
      light_3: "#0093F9",
      base: "#0078D4",
      dark_1: "#005EB7",
      dark_2: "#003D92",
      dark_3: "#001968",
    },
  },
};
