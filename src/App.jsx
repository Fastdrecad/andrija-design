import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/sidebar/Sidebar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import ComponentToHide from "./components/ComponentToHide";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import NavigateToTop from "./components/navigate-to-top/NavigateToTop";
import "./style.scss";
import Loader from "./components/loader/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setLoaded(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"} app`}>
      <Router>
        <AnimatePresence mode="wait">{loaded && <Loader />}</AnimatePresence>
        <NavigateToTop />
        <ComponentToHide>
          <Navbar />
          <Sidebar />
        </ComponentToHide>
        <AnimatedRoutes />
        <ComponentToHide>
          <Footer />
        </ComponentToHide>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
