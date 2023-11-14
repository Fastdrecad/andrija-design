import { useState } from "react";
import Modal from "../modal/Modal";
import { useInView } from "react-intersection-observer";
import "./portfolioItem.scss";

const PortfolioItem = ({
  url,
  title,
  items,
  id,
  projectName,
  category,
  className,
}) => {
  const { ref: ref1, inView: itemIsVisible } = useInView();

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <li
        ref={ref1}
        className={`${className} ${itemIsVisible ? "fadeInRight" : ""}`}
        key={id}
        id={id}
        onClick={handleClick}
      >
        <img src={url} alt="portfolio" />
        <div className="overlay">
          <h4>{projectName}</h4>
          <p></p>
          <p>{title}</p>
          <p></p>
        </div>
      </li>
      {showModal && (
        <Modal onClose={handleClose} items={items} showModal={showModal} />
      )}
    </>
  );
};

export default PortfolioItem;
