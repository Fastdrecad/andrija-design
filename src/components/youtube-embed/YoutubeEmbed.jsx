import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "./youtubeEmbed.scss";

const YoutubeEmbed = ({ embedId, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="bg" />
      <div className="videoResponsive">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>,

    document.querySelector(".modalContainer")
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
