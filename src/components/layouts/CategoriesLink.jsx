import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <ul className="flex flex-col items-center text-center space-y-1.5 list-none text-xs tablet:text-sm">
      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        className="hover:text-orange-600 transition w-fit"
      >
        <Link to="/products/category/electronics">ELECTRONICS</Link>
      </motion.li>
      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        className="hover:text-orange-600 transition w-fit"
      >
        <Link to="/products/category/jewelery">JEWELERY</Link>
      </motion.li>
      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        className="hover:text-orange-600 transition w-fit"
      >
        <Link to={`/products/category/men's clothing`}>MEN'S CLOTHING</Link>
      </motion.li>
      <motion.li
        whileTap={{ scale: -1.2 }}
        transition={{ duration: 0.3 }}
        className="hover:text-orange-600 transition w-fit"
      >
        <Link to={`/products/category/women's clothing`}>WOMEN'S CLOTHING</Link>
      </motion.li>
    </ul>
  );
};

export default memo(Categories);
