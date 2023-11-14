import AnimatedPage from "../../components/AnimatedPage";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { designProcess } from "../../data";
import "./designProcess.scss";

const DesignProcess = () => {
  const { ref: ref1, inView: titleIsVisible } = useInView();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    const parallax = document.getElementById("parallax");
    window.addEventListener("scroll", handleScroll);
    parallax.style.backgroundPositionY = `${offsetY * 0.5}px`;

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <AnimatedPage>
      <section className="designProcess">
        <div className="containerDesignProcess">
          <div className="processHeading">
            <div className="sectionTitle">
              <h3
                ref={ref1}
                className={`title ${titleIsVisible ? "fadeIn" : ""}`}
              >
                You have a vision.
                <strong>I know the way to get you there</strong>
              </h3>
              <h4>
                DESIGN<strong className="dpTitle">PROCESS</strong>
              </h4>
            </div>
          </div>
        </div>

        <div className="designProcessPart" id="parallax">
          <div className="designProcessContainer">
            <div className="designProcessPartInner">
              {designProcess.map((item, i) => (
                <div
                  key={i}
                  className="designProcessBox"
                  id={`designProcessBoxId-${i + 1}`}
                >
                  <div className="processNum">
                    <span className="num" style={{ color: `${item.color}` }}>
                      {item.number}
                    </span>
                    <h4>{item.process}</h4>
                  </div>
                  <DesignProcessImage key={i} item={item} />
                  <div className="processDesc">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

function DesignProcessImage({ item }) {
  const { ref: ref1, inView: titleIsVisible } = useInView();

  return (
    <div
      ref={ref1}
      className={`processImg ${titleIsVisible ? "animateArrow" : ""}`}
    >
      <div className="processImage">
        <img src={item.img} alt="computer typing" />
      </div>
    </div>
  );
}

export default DesignProcess;
