import { memo, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Categories from "./CategoriesLink";

const Nav = ({ flexDirection, handleMenuClose }) => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleCategoryDropdownToggle = useCallback(() => {
    setCategoryOpen((prev) => !prev);
  }, []);

  const handleCategoryDropDownClose = useCallback(() => {
    setCategoryOpen(false);
    handleMenuClose();
  }, []);

  return (
    <ul
      className={`w-full flex ${flexDirection} font-oswald font-medium laptop:justify-center laptop:items-center list-none laptop:space-x-5`}
    >
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400 ">
        <NavLink
          to="/"
          className="cursor-pointer hover:text-blue-300/70 transition"
        >
          HOME
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="products"
          className="cursor-pointer hover:text-blue-300/70 transition"
        >
          SHOP ALL
        </NavLink>
      </li>
      <ul className="dropdown relative max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400 cursor-pointer">
        <li
          onClick={handleCategoryDropdownToggle}
          className="flex justify-between items-center space-x-2 hover:text-blue-300/70 transition"
        >
          <span>CATEGORIES</span>{" "}
          {categoryOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </li>
        {categoryOpen && (
          <div
            onClick={handleCategoryDropDownClose}
            className="w-full absolute top-12 z-50 p-2.5 bg-white border-3 border-blue-300/30 rounded-sm"
          >
            <Categories />
          </div>
        )}
      </ul>
      <li
        className="max-laptop:py-2.5 max-laptop:border-b-2
        max-laptop:border-b-neutral-400"
      >
        <NavLink
          to="about"
          className="cursor-pointer hover:text-blue-300/70 transition"
        >
          ABOUT
        </NavLink>
      </li>
      <li className="max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="contact"
          className="cursor-pointer hover:text-blue-300/70 transition"
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
};

export default memo(Nav);
