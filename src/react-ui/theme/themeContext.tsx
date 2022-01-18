import colorPalette, { ColorPalette } from "./colorPalette";

// SHOULD BE REMOVED
// import { DefaultEffects } from "@fluentui/react";
import { BoxShadows, RoundCorners, boxShadows, roundCorners } from "./effects";

export interface ITheme {
  colors: ColorPalette;
  boxShadows: BoxShadows;
  roundCorners: RoundCorners;
}

export const defaultTheme: ITheme = {
  colors: colorPalette,
  boxShadows,
  roundCorners,
};
