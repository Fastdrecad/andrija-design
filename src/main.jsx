import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { MenuContextProvider } from "./context/navContext";
import App from "./App.jsx";

// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <MenuContextProvider>
      {/* <React.StrictMode>
    </React.StrictMode> */}
      <App />
    </MenuContextProvider>
  </DarkModeContextProvider>
);
