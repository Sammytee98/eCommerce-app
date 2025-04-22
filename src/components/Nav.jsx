import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const Nav = ({ flexDirection }) => {
  return (
    <ul
      className={`w-full flex ${flexDirection} font-oswald laptop:justify-center laptop:items-center list-none laptop:space-x-10`}
    >
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400 ">
        <NavLink
          to="/"
          className="cursor-pointer hover:text-blue-500 transition"
        >
          Home
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="products"
          className="cursor-pointer hover:text-blue-500 transition"
        >
          Shop All
        </NavLink>
      </li>
      <li className="flex justify-between items-center space-x-2 max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400 cursor-pointer hover:text-blue-500 transition">
        <span>Categories</span> <AiOutlineDown />
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="about"
          className="cursor-pointer hover:text-blue-500 transition"
        >
          About
        </NavLink>
      </li>
      <li className=" max-laptop:py-2.5 max-laptop:border-b-2 max-laptop:border-b-neutral-400">
        <NavLink
          to="contact"
          className="cursor-pointer hover:text-blue-500 transition"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
