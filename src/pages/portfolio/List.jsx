import { useState } from "react";
import { portfolio } from "../../data";
import { Link } from "react-router-dom";

const List = ({ menuItems, filterItems, setItems }) => {
  const [category, setCategory] = useState(["All", ...menuItems]);

  return (
    <>
      {category.map((cat, i) => (
        <li
          className={"portfolioList"}
          key={i}
          onClick={() => {
            if (cat === "All") {
              setItems(portfolio);
            } else filterItems(cat);
          }}

          // className={active ? "portfolioList active" : "portfolioList"}
          // onClick={() => setSelected(id)}
        >
          {cat}
        </li>
      ))}
    </>
  );
};

export default List;
