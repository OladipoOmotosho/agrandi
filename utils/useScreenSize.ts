import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return { windowSize, isMobile, isTablet, isDesktop };
};

export default useScreenSize;
