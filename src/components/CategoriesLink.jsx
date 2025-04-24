import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ul className="text-center space-y-1.5 list-none text-base">
      <li className="hover:text-blue-300/70 transition">
        <Link to="category/beauty">Beauty</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="category/fragrances">Fragrances</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="category/furnitures">Furnitures</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="category/laptops">Laptops</Link>
      </li>
      <li className="hover:text-blue-300/70 transition">
        <Link to="category/smartphones">Smartphones</Link>
      </li>
    </ul>
  );
};

export default Categories;
