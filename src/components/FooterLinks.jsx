import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="space-y-2 max-small:flex max-small:flex-col max-small:items-center">
      <h2 className="font-semibold font-oswald">LINKS</h2>
      <ul className="space-y-1.5 list-none font-open-sans text-base px-2">
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link to="products">Shop All</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link to="about">About</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700 transition">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
};

export default Links;
