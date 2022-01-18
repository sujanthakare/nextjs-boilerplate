import { css } from "@emotion/react";
import { fontFamily, fontSize } from "../configs";
import { defaultTheme } from "../themeContext";

const { colors } = defaultTheme;

export const baseButtonStyle = css({
  position: "relative",
  boxSizing: "border-box",
  cursor: "pointer",
  userSelect: "none",
  display: "inline-block",
  textAlign: "center",
  border: "2px solid transparent",
  height: "32px",
  fontSize: fontSize.DEFAULT,
  fontFamily: fontFamily.MEDIUM,
  padding: "0 18px",
  borderRadius: "2px",
  transition: "all 0.10s ease-in-out",
  transitionProperty: "transform, background-color",
});

type Variant = "default" | "primary" | "secondary";

export const buildVariantStyle = (variant: Variant) => {
  return css({
    color: "white",
    backgroundColor: colors.primary.base,
    ":hover": {
      backgroundColor: colors.primary.dark_1,
    },
    ":focus-visible": {
      backgroundColor: colors.primary.dark_1,
      border: `2px solid ${colors.primary.dark_1}`,
    },
    ":active": {
      backgroundColor: colors.primary.dark_2,
    },
  });
};
