import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = ({ onClose, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setCurrentIndex((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setCurrentIndex((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="bg"></div>
      <div className="modal" id="myModal">
        <span className="close cursor" onClick={onClose}>
          ×
        </span>
        <div className="modalContent">
          <div className="mySlide">
            <div className="slides">
              <div className="numberText">{`${currentIndex + 1} / ${
                items.length
              }`}</div>
              <img src={`${items[currentIndex].url}`} alt="" />
              <button className="prev" onClick={goToPrevious}>
                ❮
              </button>
              <button className="next" onClick={goToNext}>
                ❯
              </button>
            </div>
            <div className="captionContainer">
              <p id="caption">{`${items[currentIndex].desc}`}</p>
            </div>
            <div className="columnBoxContainer">
              <button className="prevDemo" onClick={goToPrevious}></button>
              <div className="columnBox">
                {items.map((slide, slideIndex) => (
                  <div
                    className="column"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                  >
                    <img
                      className={`demo cursor ${
                        currentIndex === slideIndex ? "active" : ""
                      }`}
                      src={slide.url}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <button className="nextDemo" onClick={goToNext}></button>
            </div>
          </div>
        </div>
      </div>
    </>,

    document.querySelector(".modalContainer")
  );
};

export default Modal;
