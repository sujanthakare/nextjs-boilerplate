export enum Font {
  REGULAR = "REGULAR",
  MEDIUM = "MEDIUM",
  LIGHT = "LIGHT",
  BOLD = "BOLD",
  ITALIC = "ITALIC",
}

export const fontSource = {
  REGULAR: "/fonts/OpenSans-Regular.ttf",
  MEDIUM: "/fonts/OpenSans-Medium.ttf",
  LIGHT: "/fonts/OpenSans-Light.ttf",
  BOLD: "/fonts/OpenSans-Bold.ttf",
  ITALIC: "/fonts/OpenSans-MediumItalic.ttf",
};

export const fontFamily = {
  REGULAR: "family_regular",
  MEDIUM: "family_medium",
  LIGHT: "family_light",
  BOLD: "family_bold",
  ITALIC: "family_italic",
};

export const fontSize = {
  P: "1.4rem",

  DEFAULT: "1.4rem",
  SMALL: "1.1rem",
  LARGE: "2.1rem",

  H1_EXTRA: "4.4rem",
  H1: "3rem",
  H2: "2.4rem",
  H3: "2rem",
  H4: "1.8rem",
  H5: "1.6rem",
  H6: "1.6rem",

  NO_INPUT_ZOOM_MOBILE: "2rem",
};

export const lineHeight = {
  SMALL: 1.3,
  MEDIUM: 1.4,
  LARGE: 1.6,
};

export const fontWeight = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
  EXTRABOLD: 900,
};

export const VIEW_PORT_MAX_WIDTH = "114rem";

// Media Query limits
export const PHONE_MAX = 580;
export const TAB_MAX = 1024;

export const mediaQuery = {
  PHONE: `@media (max-width: ${PHONE_MAX}px)`,
  TAB: `@media (min-width:${PHONE_MAX + 1}px) and (max-width: ${TAB_MAX}px)`,
  TAB_AND_PHONE: `@media (max-width: ${TAB_MAX}px)`,
  TAB_AND_DESKTOP: `@media (min-width:${PHONE_MAX + 1}px)`,
  DESKTOP: `@media (min-width:${TAB_MAX + 1}px)`,
};
