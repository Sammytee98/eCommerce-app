import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QuickLinks = () => {
  return (
    <section className="space-y-2 px-3 font-oswald">
      <h2 className="text-lg tablet:text-xl font-medium text-center">
        QUICK LINKS
      </h2>
      <ul className="flex flex-col items-center text-center space-y-1.5 list-none text-xs tablet:text-sm">
        <motion.li
          whileTap={{ scaleX: -1.2 }}
          transition={{ duration: 0.3 }}
          className="w-fit hover:text-orange-600 transition"
        >
          <Link to="/">HOME</Link>
        </motion.li>
        <motion.li
          whileTap={{ scaleX: -1.2 }}
          transition={{ duration: 0.3 }}
          className="w-fit hover:text-orange-600 transition"
        >
          <Link to="products">SHOP ALL</Link>
        </motion.li>
        <motion.li
          whileTap={{ scaleX: -1.2 }}
          transition={{ duration: 0.3 }}
          className="w-fit hover:text-orange-600 transition"
        >
          <Link to="about">ABOUT</Link>
        </motion.li>
        <motion.li
          whileTap={{ scaleX: -1.2 }}
          transition={{ duration: 0.3 }}
          className="w-fit hover:text-orange-600 transition"
        >
          <Link to="contact">CONTACT</Link>
        </motion.li>
      </ul>
    </section>
  );
};

export default memo(QuickLinks);
