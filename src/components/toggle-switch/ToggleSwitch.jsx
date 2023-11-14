import { DarkModeRounded, WbSunnyRounded } from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./toggleSwitch.scss";

const ToggleSwitch = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="container" onClick={toggle}>
        <DarkModeRounded className="modeIcon" style={{ color: "#F4F1C9" }} />

        <WbSunnyRounded className="modeIcon" style={{ color: "#FDB813" }} />

        <div
          className="ball"
          style={darkMode ? { right: "1px" } : { left: "1px" }}
        />
      </div>
    </>
  );
};

export default ToggleSwitch;
