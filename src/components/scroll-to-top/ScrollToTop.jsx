import { useEffect, useState } from "react";
import { GoChevronUp } from "react-icons/go";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button id="button" className={showTopBtn ? "show" : ""}>
        <GoChevronUp className="iconPosition iconStyle" onClick={goToTop} />
      </button>
    </>
  );
};

export default ScrollToTop;
