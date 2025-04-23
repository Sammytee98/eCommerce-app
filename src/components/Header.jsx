import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { FaCartShopping, FaBars, FaXmark, FaUser } from "react-icons/fa6";
import Nav from "./Nav";
import Button from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (width >= 922 && menuOpen) {
      setMenuOpen(false);
    }
  }, [width, menuOpen]);

  return (
    <header className="relative flex justify-between items-center ">
      <section className="bg-neutral-50 grow flex justify-between items-center px-5 py-5 border-b-2 border-b-neutral-300">
        <Link to="/">
          <img
            src="../../public/favicon.png"
            alt="gts logo"
            className="w-24 h-14"
          />
        </Link>

        {/* Navigation menu for large screen */}
        <nav
          aria-label="large-screen-nav"
          className="hidden w-3/4 laptop:flex text-lg space-x-2 justify-around"
        >
          <Nav />
          <Button
            children="Sign Up"
            dynamicStyle="w-32 bg-blue-500 text-white hover:bg-blue-700 rounded-sm"
          />
        </nav>

        {/* Shopping cart */}
        <div className="relative ml-10 hover:opacity-80 transition cursor-pointer">
          <FaCartShopping className="text-3xl " />
          <p className="absolute w-6 h-6 -top-4 -right-4 text-lg flex justify-center items-center bg-black text-white rounded-full">
            0
          </p>
        </div>

        <div className="text-xl max-laptop:hidden hover:opacity-80 transition cursor-pointer border-2 border-neutral-700 p-2 rounded-full bg-neutral-100 ml-10">
          <FaUser className="text-neutral-700" />
        </div>

        {/* Hamburger menu for small screen navigation */}
        <div
          onClick={handleMenuToggle}
          className="laptop:hidden -order-1 cursor-pointer p-2 border-2 border-transparent hover:border-black hover:border-dotted transition"
        >
          <FaBars className="text-3xl" />
        </div>
      </section>

      {/* Navbar for small screen */}
      <div
        className={` bg-white fixed top-0 overflow-y-auto left-0 bottom-0  right-2/6 z-50 flex flex-col items-center p-3.5 transition-all transform duration-300 ease-in-out ${
          menuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <FaXmark
          onClick={handleMenuToggle}
          className="text-3xl self-end hover:border-2 hover:border-dotted hover:border-neutral-950 cursor-pointer transition hover:bg-neutral-100"
        />
        <nav aria-label="mobile-nav" className="w-full mt-5 text-lg space-y-3">
          <div className="w-fit text-xl hover:opacity-80 transition cursor-pointer border-2 border-neutral-700 p-2 rounded-full bg-neutral-100">
            <FaUser className="text-neutral-700" />
          </div>
          <Nav flexDirection="flex-col" menuOpen={menuOpen} />
          <div className="flex flex-col space-y-2.5 mt-5 mx-auto max-w-2/3 ">
            <Button
              children="Log In"
              dynamicStyle="hover:text-blue-500 w-fit mx-auto"
            />
            <Button
              children="Sign Up"
              dynamicStyle=" bg-blue-500 text-white hover:bg-blue-700 rounded-sm"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
