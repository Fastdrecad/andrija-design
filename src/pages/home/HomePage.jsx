import AnimatedPage from "../../components/AnimatedPage";
import Intro from "../../components/intro/Intro";
import Testimonials from "../../components/testimonials/Testimonials";
import TimeIsNow from "../../components/time-is-now/TimeIsNow";
import Video from "../../components/video/Video";
import LatestWorks from "../../components/latest-works/LatestWorks";
import "./home.scss";
// import "locomotive-scroll/bundled/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <AnimatedPage>
      <div className="homeSections" data-scroll>
        <Intro />
        <Video />
        <LatestWorks />
        <TimeIsNow />
        <Testimonials />
      </div>
    </AnimatedPage>
  );
};
export default HomePage;
