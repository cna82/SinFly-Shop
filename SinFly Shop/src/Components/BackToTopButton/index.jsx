// back to top of page when clicked !!
// Imports
import { useEffect, useState } from "react";
// Reat Component
const BackToTopButton = () => {
  // Effects & states
  const [isBackToTop, setIsBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleBackToTop);
  }, []);
  // JS functions
  const handleBackToTop = () => {
    window.scrollY > 90 ? setIsBackToTop(true) : setIsBackToTop(false);
  };
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isBackToTop && (
        <button
          className=" text-light"
          onClick={scroolUp}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "30px",
            height: "2.8rem",
            width: "2.8rem",
            fontSize: "30PX",
            zIndex: "200",
            backgroundColor: "#4a23e6",
            borderRadius: "50%",
          }}
        >
          <i className="fa fa-angle-double-up" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
