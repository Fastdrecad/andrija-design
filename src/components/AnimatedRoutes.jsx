import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import ErrorPage from "../pages/error/ErrorPage";
import SuccessPage from "../pages/success/SuccessPage";
import DesignProcessPage from "../pages/design-process/DesignProcessPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/design-process" element={<DesignProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
