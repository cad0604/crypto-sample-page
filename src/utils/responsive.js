import { useState, useEffect } from "react";

export const useMobileViewport = (mobileBreakPoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakPoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakPoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileBreakPoint]);

  return isMobile;
};
