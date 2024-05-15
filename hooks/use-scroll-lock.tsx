import { useCallback, useLayoutEffect } from "react";

const iosChecker = () => {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = 'var(--scrollbar-compensation)';
    document.body.dataset.scrollLock = "true";

    if (iosChecker()) {
      scrollY = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    if (iosChecker()) {
      document.body.style.position = "";
      document.body.style.top = ``;
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
    delete document.body.dataset.scrollLock;
  }, []);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`,
    );
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
