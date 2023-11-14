import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import imgHero from "../../assets/introMe.png";
import { GoChevronDown } from "react-icons/go";
import "./intro.scss";

const Intro = () => {
  const { ref, inView: textIsVisible } = useInView();

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 50,
      strings: ["Industrial Designer", "CAD Designer", "3D Artist"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="leftIntro">
        <div className="imgContainer">
          <img src={imgHero} alt="" />
        </div>
      </div>
      <div className="rightIntro">
        <div className={`wrapperIntro ${textIsVisible ? "sideIn" : ""}`}>
          <h1 ref={ref}>
            Andrija<span>Micunovic</span>
          </h1>
          <h3>
            <span ref={textRef}>Designer</span>
          </h3>
        </div>
        <a href="#video">
          <GoChevronDown className="arrowIntro" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
