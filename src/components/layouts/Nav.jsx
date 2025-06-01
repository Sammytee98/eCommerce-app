import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Categories from "./CategoriesLink";
import { AnimatePresence } from "framer-motion";

const Nav = ({ flexDirection, handleMenuClose }) => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Toogle category dropdown
  const handleCategoryDropdownToggle = useCallback(() => {
    setCategoryOpen((prev) => !prev);
  }, []);

  // Close dropdown and menu click on link click
  const handleCategoryDropDownClose = useCallback(() => {
    setCategoryOpen(false);
    handleMenuClose();
  }, []);

  return (
    <ul
      className={`w-full flex ${flexDirection} font-oswald text-base laptop:justify-center laptop:items-center list-none laptop:space-x-5`}
    >
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200 ">
        <Link
          to="/"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          HOME
        </Link>
      </li>

      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200">
        <Link
          to="/products"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          SHOP ALL
        </Link>
      </li>

      <ul className="dropdown relative max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200 cursor-pointer">
        <li
          onClick={handleCategoryDropdownToggle}
          className="flex justify-between items-center space-x-2 hover:text-orange-600 transition"
        >
          <span>CATEGORIES</span>{" "}
          {categoryOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </li>
        <AnimatePresence>
          {categoryOpen && (
            <div
              onClick={handleCategoryDropDownClose}
              className="w-full min-w-48 absolute top-12 laptop:-left-16 z-50 p-2.5 bg-white border-2 border-gray-200 rounded-sm"
            >
              <Categories />
            </div>
          )}
        </AnimatePresence>
      </ul>

      <li
        className="max-laptop:py-2.5 max-laptop:border-b-2
        max-laptop:border-b-gray-200"
      >
        <Link
          to="/about"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          ABOUT
        </Link>
      </li>

      <li className="max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200">
        <Link
          to="/contact"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default memo(Nav);
