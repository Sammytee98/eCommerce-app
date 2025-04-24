import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="space-y-2  px-5 font-oswald">
      <h2 className="text-xl font-semibold text-center">QUICK LINKS</h2>
      <ul className="text-center space-y-1.5 list-none text-base">
        <li className="hover:text-blue-300/70 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="products">Shop All</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="about">About</Link>
        </li>
        <li className="hover:text-blue-300/70 transition">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
};

export default Links;
