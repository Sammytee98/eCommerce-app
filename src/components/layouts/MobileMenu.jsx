import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaXmark, FaUser } from "react-icons/fa6";
import Nav from "./Nav";
import Button from "../ui/Button";
import { useAuthModal } from "../../contexts/AuthModalContext";

const MobileMenu = ({ handleMenuClose, handleNavMenuClose, menuOpen }) => {
  const { openModal } = useAuthModal();

  return (
    <motion.aside
      initial={{ x: "-100%", opacity: 0, y: "-100%" }}
      animate={{ x: 0, opacity: 1, y: 0 }}
      exit={{ x: "-100%", opacity: 0, y: "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleNavMenuClose}
      className="bg-white fixed top-0 overflow-y-auto left-0 bottom-0  right-2/6 z-50 flex flex-col items-center p-3.5"
    >
      <FaXmark className="text-lg self-end text-gray-800 hover:text-orange-600 cursor-pointer transition" />
      <nav aria-label="mobile-nav" className="w-full mt-5 text-lg space-y-3">
        <div className="w-fit text-sm hover:bg-orange-200 transition cursor-pointer border-3 border-neutral-700 p-2 rounded-full bg-neutral-100">
          <FaUser className="text-neutral-700" />
        </div>
        <Nav
          flexDirection="flex-col"
          menuOpen={menuOpen}
          handleMenuClose={handleMenuClose}
          mobile={true}
        />
        <div className="flex flex-col space-y-2.5 mt-5 ">
          <Link
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => openModal("login"), 300);
              handleNavMenuClose();
            }}
            className="hover:text-orange-600 bg-neutral mx-auto font-oswald text-base"
          >
            LOG IN
          </Link>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => openModal("signup"), 300);
              handleNavMenuClose();
            }}
            children="SIGN IN"
            className="w-full"
          />
        </div>
      </nav>
    </motion.aside>
  );
};

export default MobileMenu;
