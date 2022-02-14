import { MutableRefObject, useEffect, useState } from "react";

export interface SwiperSettings {
  hasScroll: boolean;
  leftFade: boolean;
  rightFade: boolean;
  divHeight: string;
  width: number;
}

const useSwiperSettings = (scrollRef: MutableRefObject<HTMLDivElement>) => {
  const initial: SwiperSettings = {
    hasScroll: false,
    leftFade: false,
    rightFade: false,
    divHeight: "0rem",
    width: 0,
  };

  const [settings, setSettings] = useState(initial);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider?.offsetLeft || 0;
      scrollLeft = slider?.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider?.offsetLeft || 0;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    const updateSettings = () => {
      const el: HTMLElement = scrollRef.current;
      if (!el) return;
      const hasScroll = el.scrollWidth > el.clientWidth;
      setSettings({
        hasScroll: hasScroll,
        leftFade: el.scrollLeft !== 0,
        rightFade:
          hasScroll && el.scrollLeft + el.clientWidth !== el.scrollWidth,
        divHeight: `${el.clientHeight}px`,
        width: el.clientWidth,
      });
    };

    window.addEventListener("resize", updateSettings);
    slider?.addEventListener("scroll", updateSettings);
    slider?.addEventListener("mousedown", onMouseDown);
    slider?.addEventListener("mouseleave", onMouseLeave);
    slider?.addEventListener("mouseup", onMouseLeave);
    slider?.addEventListener("mousemove", onMouseMove);

    updateSettings();
    return () => {
      window.removeEventListener("resize", updateSettings);
      slider?.removeEventListener("scroll", updateSettings);
      slider?.removeEventListener("mousedown", onMouseDown);
      slider?.removeEventListener("mouseleave", onMouseLeave);
      slider?.removeEventListener("mouseup", onMouseLeave);
      slider?.removeEventListener("mousemove", onMouseMove);
    };
  }, [scrollRef]);

  return settings;
};

export default useSwiperSettings;
