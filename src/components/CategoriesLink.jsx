import { memo } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ul className="text-center space-y-1.5 list-none text-base">
      <li className="hover:text-blue-300/70 transition">
        <Link to="/products/category/beauty">BEAUTY</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="/products/category/fragrances">FRAGRANCES</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="/products/category/furniture">FURNITURES</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="/products/category/laptops">LAPTOPS</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="/products/category/smartphones">SMARTPHONES</Link>
      </li>
    </ul>
  );
};

export default memo(Categories);
