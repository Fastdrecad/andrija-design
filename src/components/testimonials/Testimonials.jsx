import { useEffect, useState } from "react";
import TestimonialItems from "../testimonial-items/TestimonialItems";
import { useInView } from "react-intersection-observer";
import { testimonials } from "../../data";

import "./testimonials.scss";

const Testimonials = () => {
  const { ref, inView: lineIsVisible } = useInView();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    const parallax = document.getElementById("parallax");
    window.addEventListener("scroll", handleScroll);
    parallax.style.backgroundPositionY = `${offsetY * 0.5}px`;

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <div
      className="testimonials"
      id="testimonials"
      data-scroll
      data-scroll-speed="-0.2"
    >
      <div className="testimonialsBg" id="parallax">
        <h1>Testimonials</h1>
        <div className="slider">
          <TestimonialItems>
            {testimonials.map((item, i) => (
              <div className="containerItems" key={i}>
                <div className="contentItems">
                  <em>
                    <p>{item.review}</p>
                  </em>
                  <div className="person">
                    <h2>{item.name}</h2>
                    <h4>{item.position}</h4>
                  </div>
                </div>
              </div>
            ))}
          </TestimonialItems>
        </div>
      </div>
      <div className="bottomSection">
        <p>
          I&apos;ll work with you to meet your objectives and expand your
          business.
        </p>
        <div className="redLineWrap">
          <span
            className={`redLine ${lineIsVisible ? "sideIn" : ""} `}
            ref={ref}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
