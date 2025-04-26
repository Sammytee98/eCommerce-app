import { memo } from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <section className="space-y-2  px-5 font-oswald">
      <h2 className="text-xl font-semibold text-center">QUICK LINKS</h2>
      <ul className="text-center space-y-1.5 list-none text-base">
        <li className="hover:text-blue-300/70 transition">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="products">SHOP ALL</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="about">ABOUT</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </section>
  );
};

export default memo(QuickLinks);
