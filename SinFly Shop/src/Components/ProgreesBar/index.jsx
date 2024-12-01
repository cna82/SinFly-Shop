// Progress bar when scrolling
import { useEffect, useState } from "react";
import classes from "./index.module.css";
const ProgressBar = () => {
  const { progressContainer, progressFill } = classes;
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHight = window.innerHeight;
      const documnetHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (documnetHeight - windowHight)) * 100;
      setScrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={progressContainer}>
        <div
          className={progressFill}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
