import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
    setIsChecked(!isChecked);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggle, isChecked }}>
      {children}
    </MenuContext.Provider>
  );
};
