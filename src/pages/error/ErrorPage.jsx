import { NavLink } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import "./error.scss";

const Error = () => {
  return (
    <AnimatedPage>
      <div className="error">
        <div id="moon">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
          <div className="layer layer-4"></div>
          <div className="layer layer-5"></div>
          <div className="layer layer-6"></div>
        </div>
        <div className="text">
          <h1>
            <strong>404</strong> <br /> You didn&apos;t break the internet, but
            we can&apos;t find what you are looking for.
          </h1>
          <NavLink to="/">Back home</NavLink>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Error;
