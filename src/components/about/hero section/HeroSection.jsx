import aboutHero from "../../../assets/About-Hero.jpg";
import myImage from "../../../assets/aboutAM.png";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="profilePic">
        <div className="profilePicInner">
          <img src={myImage} alt="Andrija designer" />
        </div>
      </div>
      <div className="heroContent">
        <div className="heroBackground">
          <img src={aboutHero} alt="furniture drafting" className="iAmAnSvg" />
        </div>
        <div className="iAmATriangle"></div>
      </div>
    </div>
  );
};

export default HeroSection;
