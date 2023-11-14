import { useEffect, useRef, useState } from "react";
import VideoPage from "../../pages/video/VideoPage";
import "./video.scss";

const Video = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("h2, strong").forEach((el) => {
        el.classList.add("fadeInBottom");
      });
    } else {
      ref.current.querySelectorAll("h2, strong").forEach((el) => {
        el.classList.remove("fadeInBottom");
      });
    }
  }, [isIntersecting]);

  return (
    <div id="video" className="videoSection">
      <div className="videoHeading">
        <div className="videoSectionTitle" ref={ref}>
          <h2>
            lets get started <strong>your project</strong>
          </h2>
        </div>
        <p>
          If you are looking to create a great product with a reliable partner,
          I would be delighted to work with you to realize your vision.
        </p>
      </div>

      <div className="video">
        <div className="videoBanner">
          <VideoPage />
          <span>imagination creates reality</span>
        </div>
        <div className="popup-media"></div>
      </div>
    </div>
  );
};

export default Video;
