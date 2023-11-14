import logoIconImg from "../../assets/Logo-Icon.png";
import { useContext } from "react";
import { MenuContext } from "../../context/navContext";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/constants";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";
import "./navbar.scss";

const Navbar = () => {
  const { toggle, isChecked } = useContext(MenuContext);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="logoContainer">
          <NavLink to="/">
            <div className="logo">
              <img src={logoIconImg} alt="Andrija logo" className="logoImg" />
            </div>
          </NavLink>
        </div>
        <ToggleSwitch />
        <div className="menuContainer">
          <ul className="menuList">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li className="menuListItem" key={id}>
                  <NavLink key={id} to={url} className="link">
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <label className="hamburgerMenu">
          <input
            type="checkbox"
            checked={isChecked}
            readOnly
            onClick={() => {
              toggle();
            }}
          />
        </label>
        <div className="ellipses" />
      </div>
    </div>
  );
};

export default Navbar;
