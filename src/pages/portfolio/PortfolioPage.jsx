import { useCallback, useEffect, useRef, useState } from "react";
import { list, portfolio } from "../../data";
import PortfolioList from "../../components/portfolio-list/PortfolioList";
import AnimatedPage from "../../components/AnimatedPage";
import PortfolioItem from "../../components/portfolio-item/PortfolioItem";

import "./portfolioPage.scss";

const imagesPerRow = 8;

const rendering = portfolio.filter((el) => {
  return el.category === "3D Rendering";
});

const cad = portfolio.filter((el) => {
  return el.category === "CAD";
});

const furniture = portfolio.filter((el) => {
  return el.category === "Furniture Design";
});

const animation = portfolio.filter((el) => {
  return el.category === "3D Animation";
});

const product = portfolio.filter((el) => {
  return el.category === "Product Design";
});

const PortfolioPage = () => {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("all");

  const [next, setNext] = useState(imagesPerRow);

  const handleMoreImages = useCallback(() => {
    setNext(next + imagesPerRow);
  }, [next]);

  useEffect(() => {
    switch (selected) {
      case "cad":
        setData(cad);
        break;
      case "rendering":
        setData(rendering);
        break;
      case "furniture":
        setData(furniture);
        break;
      case "animation":
        setData(animation);
        break;
      case "product":
        setData(product);
        break;
      default:
        setData(portfolio);
    }
    setNext(imagesPerRow);
  }, [selected]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     }
  //     // { rootMargin: "-300px" }
  //   );
  //   observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.querySelectorAll("li").forEach((el) => {
  //       el.classList.add("fadeInRight");
  //     });
  //   } else {
  //     ref.current.querySelectorAll("li").forEach((el) => {
  //       el.classList.remove("fadeInRight");
  //     });
  //   }
  // }, [isIntersecting, handleMoreImages]);

  return (
    <AnimatedPage>
      <div className="portfolio" id="portfolio">
        <div className="portfolioContainer">
          <h4>portfolio</h4>
          <ul className="tabs">
            {list.map((item, i) => (
              <PortfolioList
                key={i}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          <ul className="imageGallery" ref={ref}>
            {data?.slice(0, next).map((el, i) => (
              <PortfolioItem
                key={el.id}
                title={el.title}
                items={el.items}
                id={`lwPortfolioItem-${i}`}
                className={`lwPortfolioItem `}
                url={el.url}
                projectName={el.projectName}
                category={el.category}
                descCategory={el.descCategory}
              />
            ))}
          </ul>
        </div>
        {next < data?.length && (
          <button id="loadMore" className="loadMore" onClick={handleMoreImages}>
            load more
          </button>
        )}
        <div style={{ marginBottom: "100px" }} />
      </div>
    </AnimatedPage>
  );
};
export default PortfolioPage;
