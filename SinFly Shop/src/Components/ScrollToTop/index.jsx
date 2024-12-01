// Scroll to top

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => handleScrollToTop(), [pathname]);
  return null;
};

export default ScrollToTop;
