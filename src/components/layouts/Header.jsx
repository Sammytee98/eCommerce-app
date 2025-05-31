import { useCallback, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { FaBars, FaXmark, FaUser, FaRegHeart, FaHeart } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import Nav from "./Nav";
import Button from "../ui/Button";
import ShoppingCart from "../ShoppingCart";
import { useStoreState } from "easy-peasy";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import Wishlist from "../Wishlist";
import { useAuthModal } from "../../contexts/AuthModalContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const { width } = useWindowSize();
  const totalQuantity = useStoreState((state) => state.totalQuantity);
  const { openModal } = useAuthModal();

  const handleMenuOpen = useCallback(() => {
    setMenuOpen(true);
    setCartOpen(false);
  }, []);

  const handleCartOpen = useCallback(() => {
    setCartOpen(true);
    setMenuOpen(false);
  }, []);

  const handleWishlistOpen = useCallback(() => {
    setWishlistOpen(true);
  });

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
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 flex justify-between items-center shadow"
    >
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
          <Nav mobile={false} />

          <Button
            onClick={(e) => {
              e.preventDefault();
              openModal("signup");
            }}
            children="SIGN UP"
            className="w-32 "
          />
        </nav>

        {/* Cart and WishList Icon */}
        <div className="flex items-center">
          {/* Wishlist icon */}
          <button
            type="button"
            onClick={handleWishlistOpen}
            className="flex flex-col items-center cursor-pointer"
          >
            {wishlistOpen ? (
              <FaHeart className="text-orange-500" />
            ) : (
              <FaRegHeart className="text-orange-500" />
            )}
            {width > 992 && <p className="text-xs font-medium">Wishlist</p>}
          </button>

          {/* Cart icon */}
          <button
            type="button"
            onClick={handleCartOpen}
            className="ml-10 group hover:opacity-80 transition cursor-pointer flex flex-col items-center"
          >
            <div className="relative">
              <HiMiniShoppingBag className="text-lg text-orange-500 group-hover:text-orange-600 transition" />
              <p
                className="absolute w-3 h-3 -top-1 -right-0.5
           text-[13px] font-semibold flex justify-center items-center bg-orange-500 text-white rounded-full"
              >
                {totalQuantity}
              </p>
            </div>
            {width > 992 && <p className="text-xs font-medium">Cart</p>}
          </button>
        </div>

        {/* Wishlist slider */}
        <AnimatePresence>
          {wishlistOpen && (
            <motion.aside
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white fixed top-0 overflow-y-auto right-0 bottom-0 left-0 mobile:left-1/4 tablet:left-2/6 laptop:left-6/12 desktop:left-7/12 z-50 flex flex-col items-center"
            >
              <Wishlist setWishlistOpen={setWishlistOpen} />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Shopping cart slider */}
        <AnimatePresence>
          {cartOpen && (
            <motion.aside
              initial={{ x: "100%", y: "-100%", opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: "100%", y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white fixed top-0 overflow-y-auto right-0 bottom-0 left-0 mobile:left-1/4 tablet:left-2/6 laptop:left-6/12 desktop:left-7/12 z-50 flex flex-col items-center p-3.5"
            >
              <ShoppingCart setCartOpen={setCartOpen} />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Hamburger menu for small screen navigation */}
        <div
          onClick={handleMenuOpen}
          className="laptop:hidden -order-1 cursor-pointer p-2 "
        >
          <FaBars className="text-lg font-light text-gray-800 hover:text-orange-600 transition" />
        </div>
      </section>

      {/* Navbar for small screen */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            handleMenuClose={handleMenuClose}
            handleNavMenuClose={handleNavMenuClose}
            menuOpen={menuOpen}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default memo(Header);
