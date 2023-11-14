import { useEffect, useRef, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import YoutubeEmbed from "../../components/youtube-embed/YoutubeEmbed";
import "./videoPage.scss";

const VideoPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("button").forEach((el) => {
        el.classList.add("sideRight");
      });
    } else {
      ref.current.querySelectorAll("button").forEach((el) => {
        el.classList.remove("sideRight");
      });
    }
  }, [isIntersecting]);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div ref={ref}>
      <button onClick={handleClick} className="playBtn">
        <AiOutlinePlayCircle className="playIcon" />
      </button>
      {showModal && (
        <YoutubeEmbed onClose={handleClose} embedId="MzTkNCEDeLM" />
      )}
    </div>
  );
};

export default VideoPage;
