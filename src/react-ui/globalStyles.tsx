import React from "react";
import { css, Global } from "@emotion/react";

import {
  fontFamily,
  fontSource,
  fontSize,
  mediaQuery,
  lineHeight,
} from "./configs";

const GlobalStyles = () => {
  const FONT_FACES = Object.keys(fontFamily).map((key) => {
    // @ts-ignore
    const font = fontFamily[key];
    // @ts-ignore
    const source = fontSource[key];

    return {
      "@font-face": css({
        fontFamily: font,
        src: `url(${source})`,
        fontDisplay: "swap",
      }),
    };
  });

  const CSS_RESET = {
    "*": css({
      margin: 0,
      padding: 0,
      border: 0,
      verticalAlign: "baseline",
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    }),
  };

  const GLOBAL_RULES = {
    body: css({
      margin: 0,
      fontFamily: fontFamily.REGULAR,
      overflowWrap: "anywhere",
      textRendering: "geometricPrecision",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      fontSize: fontSize.DEFAULT,
    }),

    "input, textarea, select, button": css({
      fontFamily: fontFamily.REGULAR,
      textRendering: "inherit",
      WebkitAppearance: "none",
    }),

    "input, textarea, select": css({
      fontSize: fontSize.DEFAULT,
      // fontSize need to be > 16px on mobile, else iOS will zoom on input focus
      [mediaQuery.PHONE]: { fontSize: fontSize.NO_INPUT_ZOOM_MOBILE },
    }),

    "*:focus": css({
      outline: "none",
      boxShadow: "none",
    }),
  };

  const TYPOGRAPHY = {
    html: css({
      [mediaQuery.PHONE]: { fontSize: "50%" },
      [mediaQuery.TAB]: { fontSize: "60%" },
      [mediaQuery.DESKTOP]: { fontSize: "62.5%" },
    }),

    "h1, h2, h3, h4, h5, h6": css({
      lineHeight: lineHeight.SMALL,
      fontFamily: fontFamily.BOLD,
    }),

    h1: css({
      fontSize: fontSize.H1,
      marginBottom: "1.5rem",
    }),

    h2: css({
      fontSize: fontSize.H2,
    }),

    h3: css({
      fontSize: fontSize.H3,
    }),

    h4: css({
      fontSize: fontSize.H4,
    }),

    h5: css({
      fontSize: fontSize.H5,
    }),

    h6: css({
      fontSize: fontSize.H6,
      textTransform: "uppercase",
      letterSpacing: 1.75,
    }),

    p: css({
      lineHeight: lineHeight.MEDIUM,
      fontFamily: fontFamily.REGULAR,
      fontSize: fontSize.P,
    }),

    strong: css({
      fontFamily: fontFamily.BOLD,
    }),
  };

  return (
    <Global
      styles={{
        ...CSS_RESET,
        ...FONT_FACES,
        ...GLOBAL_RULES,
        ...TYPOGRAPHY,
      }}
    />
  );
};

export default GlobalStyles;
