import { useCallback, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { FaBars, FaXmark, FaUser } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import Nav from "../ui/Nav";
import Button from "../ui/Button";
import ShoppingCart from "../ShoppingCart";
import { useStoreState } from "easy-peasy";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { width } = useWindowSize();
  const totalQuantity = useStoreState((state) => state.totalQuantity);

  const handleMenuOpen = useCallback(() => {
    setMenuOpen(true);
    setCartOpen(false);
  }, []);

  const handleCartOpen = useCallback(() => {
    setCartOpen(true);
    setMenuOpen(false);
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

  return (
    <header className="relative top-0 left-0 right-0 z-50 flex justify-between items-center ">
      <section className="bg-gray-50 grow flex justify-between items-center px-5 py-3">
        <Link to="/">
          <img
            src="../../public/favicon.svg"
            alt="gts logo"
            className="rounded-md"
            loading="lazy"
          />
        </Link>

        {/* Navigation menu for large screen */}
        <nav
          aria-label="large-screen-nav"
          className="hidden w-3/4 laptop:flex text-lg space-x-2 justify-around"
        >
          <Nav />
          <Link to="signup">
            <Button children="SIGN UP" className="w-32 rounded-sm" />
          </Link>
        </nav>

        {/* Cart Icon */}
        <div
          onClick={handleCartOpen}
          className="relative ml-10 group hover:opacity-80 transition cursor-pointer"
        >
          <HiMiniShoppingBag className="text-lg text-gray-700 group-hover:text-orange-600 transition" />
          <p
            className="absolute w-4 h-4 -top-2.5 -right-2
           text-xs font-semibold grid place-items-center bg-orange-500 text-white rounded-full"
          >
            {totalQuantity}
          </p>
        </div>

        {/* Shopping Cart */}
        <section
          className={` bg-white fixed top-0 overflow-y-auto right-0 bottom-0 left-0 mobile:left-1/4 tablet:left-2/6 laptop:left-6/12 desktop:left-7/12 z-50 flex flex-col items-center p-3.5 transition-all transform duration-300 ease-in-out ${
            cartOpen ? "visible -translate-x-0" : "invisible translate-x-full"
          }`}
        >
          <ShoppingCart setCartOpen={setCartOpen} />
        </section>

        {/* User Profile Icon */}
        {/* <div className="text-sm max-laptop:hidden hover:bg-blue-300/50 transition cursor-pointer border-3 border-blue-300/5 p-2 rounded-full bg-blue-300/20 ml-10">
          <FaUser />
        </div> */}

        {/* Hamburger menu for small screen navigation */}
        <div
          onClick={handleMenuOpen}
          className="laptop:hidden -order-1 cursor-pointer p-2 "
        >
          <FaBars className="text-lg font-light text-gray-800 hover:text-orange-600 transition" />
        </div>
      </section>

      {/* Navbar for small screen */}
      <div
        onClick={handleNavMenuClose}
        className={` bg-white fixed top-0 overflow-y-auto left-0 bottom-0  right-2/6 z-50 flex flex-col items-center p-3.5 transition-all transform duration-300 ease-in-out ${
          menuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <FaXmark className="text-lg self-end text-gray-800 hover:text-orange-600 cursor-pointer transition" />
        <nav aria-label="mobile-nav" className="w-full mt-5 text-lg space-y-3">
          <div className="w-fit text-sm hover:bg-blue-300/50 transition cursor-pointer border-3 border-neutral-700 p-2 rounded-full bg-neutral-100">
            <FaUser className="text-neutral-700" />
          </div>
          <Nav
            flexDirection="flex-col"
            menuOpen={menuOpen}
            handleMenuClose={handleMenuClose}
          />
          <div className="flex flex-col space-y-2.5 mt-5 ">
            <Link
              to="login"
              className="hover:text-orange-600 bg-neutral mx-auto font-oswald text-base"
            >
              LOG IN
            </Link>
            <Link to="signup">
              <Button children="SIGN IN" className="w-full" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
