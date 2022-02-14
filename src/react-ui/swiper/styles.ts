import { css } from "@emotion/react";
import { SwiperSettings } from "./useSwiperSettings";
import { IOffset, IOptions } from "./types";
import { deviceQuery } from "@/react-ui/theme/mediaQuery";
import { boxShadows } from "@/react-ui/theme/effects";

export const itemsInSwiper = (settings: SwiperSettings, items: IOptions) => {
  return (
    Math.floor(
      settings.width / ((items.itemSize || 0) + (items.itemPadding || 0) * 2)
    ) + (items.itemOffset || 0)
  );
};

const getStyles = (
  swiperOptions: IOptions,
  offset: IOffset,
  settings: SwiperSettings
) => {
  const options: IOptions = {
    itemOffset: 0,
    itemPadding: 0,
    ...swiperOptions,
  };

  const swiperOffset: IOffset = {
    right: 0,
    left: 0,
    ...offset,
  };

  const calculateWidth = (nrOfItems: number) => {
    if (options.itemSize) {
      return `${options.itemSize}px`;
    } else if (nrOfItems) {
      return `calc(100%/${nrOfItems} - 4rem)`;
    } else if (settings.hasScroll) {
      const xItems = nrOfItems ? nrOfItems : itemsInSwiper(settings, options);
      return `calc(100%/${xItems} - 4rem)`;
    }
  };

  return {
    ITEM_STYLE: css({
      flex: "0 0 auto",
      marginRight: "2rem",
      [deviceQuery.DESKTOP]: {
        width: `${calculateWidth(options.desktop || 0)}`,
      },
      [deviceQuery.TAB]: {
        width: `${calculateWidth(options.tab || 0)}`,
      },
      [deviceQuery.PHONE]: {
        width: `${calculateWidth(options.phone || 0)}`,
        ":first-of-type": {
          marginLeft: "2rem",
        },
      },
      transition: "all 0.15s ease-in-out",
    }),

    FADE: css({
      [deviceQuery.DESKTOP]: {
        zIndex: 2,
        transition: "opacity 500ms ease-in-out",
        boxShadow: boxShadows.depth4,
        position: "relative",
        height: settings.divHeight,
      },
    }),

    SCROLL: css({
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
      ":last-child:after": {
        content: `''`,
        paddingRight: swiperOffset.right,
      },
      paddingLeft: swiperOffset.left,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      WebkitOverflowScrolling: "touch",
      [deviceQuery.TAB_AND_DESKTOP]: {
        ...(!settings.hasScroll && { userDrag: "none" }),
      },
    }),

    CONTAINER: css({
      position: "relative",
      display: settings.hasScroll ? "flex" : "inline",
      flexDirection: "row",
    }),

    ICON: css({
      transition: "all 0.3s ease-in-out",
    }),

    BUTTON: css({
      zIndex: 2,
      [deviceQuery.TAB_AND_PHONE]: {
        display: "none",
      },
      transition: "opacity 500ms ease-in-out",
      backgroundColor: "rgba(0,0,0,0)",
      position: "absolute",
      top: "35%",
      padding: "2rem",
      ":focus-visible": {
        // boxShadow: `0 0 0 2pt ${color.PRIMARY_FOCUS}`,
      },
    }),
  };
};

export default getStyles;
