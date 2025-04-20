import { NavLink } from "react-router-dom";

const Nav = ({ flexDirection, handleMenuToggle }) => {
  return (
    <ul
      onClick={handleMenuToggle}
      className={`w-full flex ${flexDirection} laptop:justify-center laptop:items-center list-none laptop:space-x-10`}
    >
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400 ">
        <NavLink
          to="/"
          className="cursor-pointer laptop:hover:text-neutral-200 max-laptop:hover:text-blue-500 transition"
        >
          Home
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="products"
          className="cursor-pointer laptop:hover:text-neutral-200 max-laptop:hover:text-blue-500 transition"
        >
          Shop All
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="about"
          className="cursor-pointer laptop:hover:text-neutral-200 max-laptop:hover:text-blue-500 transition"
        >
          About
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="contact"
          className="cursor-pointer laptop:hover:text-neutral-200 max-laptop:hover:text-blue-500 transition"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
