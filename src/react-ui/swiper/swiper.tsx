import React, { useRef } from "react";
import { css } from "@emotion/react";
import getStyles, { itemsInSwiper } from "./styles";
import { IOffset, IOptions } from "./types";
import { useDebouncedCallback } from "./useDebounce";
import useSwiperSettings from "./useSwiperSettings";
import { Icon } from "@mui/material";

/**
 * Component with scrolling capabilites.
 *  - Set a fixed size per device to allow that many items in the scroll.
 *  - Specify the itemSize in 'px' and x number of items will fit.
 *      itemOffset: Offsets the last item. Value between 0-1.
 *      e.g. '0.5' would show half an item on the right edge.
 *
 * Fixed size has precidence over itemSize but they can be combined.
 */

export interface ISwiperProps {
  options?: IOptions;
  offset: IOffset;
  itemSize?: string | number;
}

const Swiper: React.FC<ISwiperProps> = ({
  children,
  options,
  offset,
  ...rest
}) => {
  if (
    !options?.itemSize &&
    !(options?.desktop && options?.tab && options?.phone)
  ) {
    throw new Error("itemSize or device options must be set.");
  }

  const leftButton = useRef<HTMLButtonElement>();
  const rightButton = useRef<HTMLButtonElement>();

  const scrollRef = useRef<HTMLDivElement>();
  const settings = useSwiperSettings(scrollRef as any);

  const { CONTAINER, FADE, SCROLL, ITEM_STYLE, ICON, BUTTON } = getStyles(
    options,
    offset,
    settings
  );

  useDebouncedCallback(10, () => {
    if (leftButton.current) {
      if (settings.leftFade) {
        leftButton.current.removeAttribute("hidden");
      } else {
        setTimeout(() => {
          leftButton?.current?.setAttribute("hidden", "true");
        }, 500);
      }
    }

    if (rightButton.current) {
      if (settings.rightFade) {
        rightButton.current.removeAttribute("hidden");
      } else {
        setTimeout(() => {
          rightButton?.current?.setAttribute("hidden", "true");
        }, 500);
      }
    }
  });

  const handleClick = (isLeft: boolean) => {
    const move: number = options.desktop
      ? settings.width / options.desktop
      : settings.width / itemsInSwiper(settings, options);
    const left = scrollRef.current?.scrollLeft || 0 + (isLeft ? -move : move);
    scrollRef?.current?.scrollTo({ left, behavior: "smooth" });
  };

  const fade = (side: "left" | "right") => {
    const left: boolean = side === "left";
    const showFade = left ? settings.leftFade : settings.rightFade;
    const opacity = showFade ? 1 : 0;
    const transform = `rotate(${left ? "270" : "90"}deg)`;
    const clipPath = `inset(-2px ${left ? "-500" : "-2"}px -2px ${
      left ? "-2" : "-500"
    }px)`;

    return (
      <React.Fragment>
        <div css={[FADE, css({ opacity, clipPath })]} />
        <button
          ref={side === "left" ? (leftButton as any) : (rightButton as any)}
          id={`button-${side}`}
          data-testid={`button-${side}`}
          onClick={() => handleClick(left)}
          css={[
            BUTTON,
            css({ opacity, transform, ...(!left && { right: 0 }) }),
          ]}
        >
          <Icon className="fi-rr-chevron" fontSize="medium" css={ICON} />
        </button>
      </React.Fragment>
    );
  };

  return (
    <div {...rest} css={CONTAINER}>
      {settings.hasScroll && fade("left")}
      <div data-testid="container" ref={scrollRef as any} css={SCROLL}>
        {React.Children.map(children, (child, index) => (
          <div key={index} css={ITEM_STYLE}>
            {child}
          </div>
        ))}
      </div>
      {settings.hasScroll && fade("right")}
    </div>
  );
};

export default Swiper;
