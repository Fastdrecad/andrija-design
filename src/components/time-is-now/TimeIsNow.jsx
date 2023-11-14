import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./timeIsNow.scss";

const TimeIsNow = () => {
  const { ref, inView: buttonIsVisible } = useInView();

  return (
    <div className="timeIsNow" id="timeIsNow">
      <div className="ellipses" />

      <div className="logoBg">
        <div className="content" ref={ref}>
          <h3>
            the time is now! <strong>you deserve the best</strong>
          </h3>
          <p>Do your first step and contact me.</p>
          <NavLink
            type="button"
            to="/contact"
            ref={ref}
            className={`letMeHear ${buttonIsVisible ? "bottomIn" : ""}`}
          >
            let me hear your story
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TimeIsNow;
