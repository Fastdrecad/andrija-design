import { NavLink } from "react-router-dom";
import { portfolio } from "../../data";
import { useState, useEffect, useRef } from "react";
import PortfolioItem from "../portfolio-item/PortfolioItem";
import "./latestWorks.scss";

const LatestWorks = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }
      // { rootMargin: "-300px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("li").forEach((el) => {
        el.classList.add("fadeInRight");
      });
    } else {
      ref.current.querySelectorAll("li").forEach((el) => {
        el.classList.remove("fadeInRight");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="latestWorks" id="latestWorks">
      <h4>
        latest <span>works</span>
      </h4>
      <ul className="imageGallery" ref={ref}>
        {/* test */}
        {portfolio.slice(0, 8).map((el, i) => (
          <PortfolioItem
            key={el.id}
            title={el.title}
            items={el.items} // items for modal
            id={`lwPortfolioItem-${i}`}
            url={el.url}
            projectName={el.projectName}
            category={el.category}
            className={`lwPortfolioItem`}
          />
        ))}

        {/* {portfolioItems.map((item, i) => (
          <PortfolioItem
            key={i}
            id={`lwPortfolioItem-${i}`}
            url={item.url}
            projectName={item.projectName}
            descCategory={item.descCategory}
            className={`lwPortfolioItem`}
          />
        ))} */}
      </ul>
      <div className="viewMore">
        <NavLink to="/portfolio" className="viewMoreLink">
          view more projects
        </NavLink>
      </div>
    </div>
  );
};

export default LatestWorks;
