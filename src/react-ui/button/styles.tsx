import { css } from "@emotion/react";
import { fontFamily, fontSize, fontWeight } from "../theme/fonts";
import { defaultTheme } from "../theme/themeContext";

export type Variant = "default" | "primary" | "secondary";

const { colors, boxShadows } = defaultTheme;

export const baseButtonStyle = css({
  position: "relative",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none",
  display: "inline-block",
  textAlign: "center",
  height: "32px",
  fontSize: fontSize.DEFAULT,
  fontWeight: fontWeight.MEDIUM,
  padding: "0 18px",
  transition: "all 0.09s ease-in-out",
  transitionProperty: "transform, background-color",
  borderRadius: "2px",
});

const getVariantColors = (variant: Variant) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: colors.themePrimary,
        hoverColor: colors.themeDarkAlt,
        borderColor: colors.themeDarkAlt,
        pressedColor: colors.themeDarker,
        textColor: colors.white,
      };
    case "default":
    default:
      return {
        backgroundColor: colors.white,
        hoverColor: colors.white,
        borderColor: colors.neutralSecondary,
        pressedColor: colors.neutralLighter,
        textColor: colors.black,
      };
  }
};

export const buildVariantStyle = (variant: Variant) => {
  const variantColors = getVariantColors(variant);

  return css({
    color: variantColors.textColor,
    border: `1px solid ${variantColors.borderColor}`,
    backgroundColor: variantColors.backgroundColor,
    ":hover": {
      backgroundColor: variantColors.hoverColor,
    },
    ":focus-visible": {
      backgroundColor: variantColors.hoverColor,
      border: `2px solid ${variantColors.hoverColor}`,
    },
    ":active": {
      backgroundColor: variantColors.pressedColor,
    },
  });
};
