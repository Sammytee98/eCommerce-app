import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Categories from "../CategoriesLink";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";

const Nav = ({ flexDirection, handleMenuClose, menuOpen }) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const { width } = useWindowSize();

  const handleCategoryDropdownToggle = useCallback(() => {
    setCategoryOpen((prev) => !prev);
  }, []);

  const handleCategoryDropDownClose = useCallback(() => {
    setCategoryOpen(false);
    handleMenuClose();
  }, []);

  const navContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItem = {
    hidden: { opactiy: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
  };

  const isMobile = width < 992;

  return (
    <motion.ul
      initial={navContainer}
      animate={isMobile ? (menuOpen ? "visible" : "hidden") : "visible"}
      className={`w-full flex ${flexDirection} font-oswald text-sm laptop:justify-center laptop:items-center list-none laptop:space-x-5`}
    >
      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        variants={navItem}
        className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200 "
      >
        <Link
          to="/"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          HOME
        </Link>
      </motion.li>

      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        variants={navItem}
        className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200"
      >
        <Link
          to="/products"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          SHOP ALL
        </Link>
      </motion.li>

      <ul className="dropdown relative max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200 cursor-pointer">
        <motion.li
          whileTap={{ scale: -1.2 }}
          transition={{ duration: 0.3 }}
          variants={navItem}
          onClick={handleCategoryDropdownToggle}
          className="flex justify-between items-center space-x-2 hover:text-orange-600 transition"
        >
          <span>CATEGORIES</span>{" "}
          {categoryOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </motion.li>
        <AnimatePresence>
          {categoryOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={handleCategoryDropDownClose}
              className="w-full min-w-48 absolute top-12 laptop:-left-16 z-50 p-2.5 bg-white border-2 border-gray-200 rounded-sm"
            >
              <Categories />
            </motion.div>
          )}
        </AnimatePresence>
      </ul>

      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        variants={navItem}
        className="max-laptop:py-2.5 max-laptop:border-b-2
        max-laptop:border-b-gray-200"
      >
        <Link
          to="/about"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          ABOUT
        </Link>
      </motion.li>

      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        variants={navItem}
        className="max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-gray-200"
      >
        <Link
          to="/contact"
          className="cursor-pointer hover:text-orange-600 transition"
        >
          CONTACT
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default memo(Nav);
