import { useCallback, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { FaBagShopping, FaBars, FaXmark, FaUser } from "react-icons/fa6";
import Nav from "./Nav";
import Button from "./Button";
import CartPage from "../pages/CartPage";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { width } = useWindowSize();

  const handleMenuOpen = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleNavMenuClose = useCallback((e) => {
    if (e.target.closest(".dropdown")) return;

    handleMenuClose();
  });

  useEffect(() => {
    if (width >= 922 && menuOpen) {
      setMenuOpen(false);
    }
  }, [width, menuOpen]);

  // const handleCartNavigation = useCallback(() => {
  //   navigate("cart");
  // }, []);

  return (
    <header className="relative top-0 left-0 right-0 z-50 flex justify-between items-center ">
      <section className="bg-blue-300/10 grow flex justify-between items-center px-5 py-3">
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
            children="SIGN UP"
            dynamicStyle="w-32 border-3 border-black hover:border-blue-300/70 hover:bg-blue-300/70 hover:text-white rounded-sm"
          />
        </nav>

        {/* Shopping cart */}
        <div className="relative ml-10 hover:opacity-80 transition cursor-pointer">
          <FaBagShopping className="text-xl" />
          <p
            className="absolute w-4 h-4 -top-2 -right-2
           text-sm font-semibold flex justify-center items-center bg-black text-white rounded-full"
          >
            0
          </p>
        </div>

        <div className="text-sm max-laptop:hidden hover:bg-blue-300/50 transition cursor-pointer border-3 border-blue-300/5 p-2 rounded-full bg-blue-300/20 ml-10">
          <FaUser />
        </div>

        {/* Cart page */}
        <section className="hidden">
          <CartPage />
        </section>

        {/* Hamburger menu for small screen navigation */}
        <div
          onClick={handleMenuOpen}
          className="laptop:hidden -order-1 cursor-pointer p-2 border-3 border-transparent hover:border-white hover:border-dotted transition"
        >
          <FaBars className="text-xl " />
        </div>
      </section>

      {/* Navbar for small screen */}
      <div
        onClick={handleNavMenuClose}
        className={` bg-white fixed top-0 overflow-y-auto left-0 bottom-0  right-2/6 z-50 flex flex-col items-center p-3.5 transition-all transform duration-300 ease-in-out ${
          menuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <FaXmark className="text-2xl self-end hover:border-3 hover:border-dotted hover:border-blue-300/50 cursor-pointer transition hover:bg-blue-300/50" />
        <nav aria-label="mobile-nav" className="w-full mt-5 text-lg space-y-3">
          <div className="w-fit text-sm hover:bg-blue-300/50 transition cursor-pointer border-3 border-neutral-700 p-2 rounded-full bg-neutral-100">
            <FaUser className="text-neutral-700" />
          </div>
          <Nav
            flexDirection="flex-col"
            menuOpen={menuOpen}
            handleMenuClose={handleMenuClose}
          />
          <div className="flex flex-col space-y-2.5 mt-5 mx-auto max-w-2/3 ">
            <Button
              children="LOG IN"
              dynamicStyle="hover:text-blue-300/50 w-fit mx-auto"
            />
            <Button
              children="SIGN UP"
              dynamicStyle=" bg-blue-300/50 hover:bg-blue-300/70 rounded-sm"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
