import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import { useContext } from "react";
import { MenuContext } from "../../context/navContext";
import "./sidebar.scss";

const Sidebar = () => {
  const { toggle, menuOpen } = useContext(MenuContext);

  return (
    <div className="sidebarContainer">
      <div className={`${menuOpen ? "sidebar showSidebar" : "sidebar "}`}>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  key={id}
                  to={url}
                  className="link"
                  onClick={() => toggle()}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
