import { useState } from "react";
import { FaCartShopping, FaBars, FaTimes } from "react-icons/fa";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center relative px-5 py-2.5 border-b-2 border-b-neutral-950">
      <h1 className="font-extrabold font-logo text-4xl">DNK</h1>
      /Navigation menu for large screen
      <nav
        aria-label="large-screen-nav"
        className="space-x-5 hidden laptop:flex"
      >
        <Nav />
      </nav>
      /Shopping cart
      <div>
        <FaCartShopping className="text-2xl" />
      </div>
      /Hamburger menu for small screen navigation
      <div className="md:hidden cursor-pointer p-2 border-2 border-neutral-950 group-first:">
        <FaBars />
      </div>
      /Navbar for small screen
      <div className="absolute top-0 left-1/2 bg-neutral-200 flex flex-col items-center space-y-4">
        <FaTimes />
        <nav aria-label="mobile-nav">
          <Nav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
