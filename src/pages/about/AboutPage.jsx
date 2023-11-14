import AnimatedPage from "../../components/AnimatedPage";
import AboutSection from "../../components/about/about section/AboutSection";
import HeroSection from "../../components/about/hero section/HeroSection";
import "./about.scss";

const About = () => {
  return (
    <AnimatedPage>
      <div className="about">
        <HeroSection />
        <AboutSection />
      </div>
    </AnimatedPage>
  );
};

export default About;
