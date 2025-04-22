import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="font-oswald space-y-2 px-5">
      <h2 className="text-xl font-semibold text-center">CATEGORIES</h2>
      <ul className="text-center space-y-1.5 list-none text-base">
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link>Beauty</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link>Fashion</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link>Laptops</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link>Smartphones</Link>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
