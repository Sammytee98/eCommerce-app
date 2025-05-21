import { memo } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ul className="flex flex-col items-center text-center space-y-1.5 list-none text-xs tablet:text-sm">
      <li className="hover:text-orange-600 transition w-fit">
        <Link to="/products/category/electronics">ELECTRONICS</Link>
      </li>
      <li className="hover:text-orange-600 transition w-fit">
        <Link to="/products/category/jewelery">JEWELERY</Link>
      </li>
      <li className="hover:text-orange-600 transition w-fit">
        <Link to={`/products/category/men's clothing`}>MEN'S CLOTHING</Link>
      </li>
      <li className="hover:text-orange-600 transition w-fit">
        <Link to={`/products/category/women's clothing`}>WOMEN'S CLOTHING</Link>
      </li>
    </ul>
  );
};

export default memo(Categories);
