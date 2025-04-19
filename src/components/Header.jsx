import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import Nav from "./Nav";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="relative flex justify-between items-center bg-blue-500">
      <section className="grow flex justify-between items-center px-8  py-5">
        <Link
          to="/"
          className="text-4xl text-white font-logo font-extrabold italic"
        >
          GTS
        </Link>

        {/* Navigation menu for large screen */}
        <nav
          aria-label="large-screen-nav"
          className="hidden w-4/5 laptop:flex text-white"
        >
          <Nav />
          <Button
            children="Sign Up"
            dynamicStyle="w-32 bg-white text-black hover:bg-neutral-200 rounded-sm"
          />
        </nav>

        {/* Shopping cart */}
        <div className="relative ml-10 hover:opacity-80 transition cursor-pointer">
          <FaCartShopping className="text-3xl text-white" />
          <p className="absolute w-6 h-6 -top-4 -right-4 text-lg flex justify-center items-center bg-white rounded-full">
            0
          </p>
        </div>

        {/* Hamburger menu for small screen navigation */}
        <div
          onClick={handleMenuToggle}
          className="laptop:hidden -order-1 cursor-pointer p-2 border-2 border-transparent hover:border-white hover:border-dotted transition"
        >
          <FaBars className="text-3xl text-white" />
        </div>
      </section>

      {/* Navbar for small screen */}
      <div
        className={` bg-white fixed top-0  left-0 bottom-0  right-2/6 z-50 flex flex-col items-center p-3.5 transition-all transform duration-300 ease-in-out ${
          isOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <FaXmark
          onClick={handleMenuToggle}
          className="text-3xl self-end border-2 hover:border-dotted hover:border-neutral-950 cursor-pointer transition hover:bg-neutral-100"
        />
        <nav aria-label="mobile-nav" className="w-full mt-5">
          <Nav flexDirection="flex-col" />
          <div className="flex flex-col space-y-2.5 mt-5 mx-auto max-w-1/2 ">
            <Button
              children="Log In"
              dynamicStyle="hover:text-blue-500 w-fit mx-auto"
            />
            <Button
              children="Sign Up"
              dynamicStyle="bg-blue-500 text-white hover:bg-blue-700 rounded-sm"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
