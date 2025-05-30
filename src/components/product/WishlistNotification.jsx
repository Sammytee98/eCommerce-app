import { motion } from "framer-motion";
import ScrollToTop from "../../layouts/ScrollToTop";

const WishlistNotification = ({ children }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-3 text-center text-base bg-green-500 text-white"
    >
      <ScrollToTop />
      {children}
    </motion.p>
  );
};

export default WishlistNotification;
