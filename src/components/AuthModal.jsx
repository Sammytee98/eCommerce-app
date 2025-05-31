import { motion, AnimatePresence } from "framer-motion";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useEffect } from "react";
import AuthForm from "./forms/AuthForm";
import AuthLinks from "./Auth Modal/AuthLinks";
import AuthSocials from "./Auth Modal/AuthSocials";

const AuthModal = () => {
  const { isModalOpen, authMode, setAuthMode, closeModal } = useAuthModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            className="bg-white rounded-md shadow-cs max-w-md w-[90%] px-6 py-2 relative font-oswald"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full text-right">
              <button
                onClick={closeModal}
                className="text-3xl text-gray-400 hover:text-orange-500 transition cursor-pointer mb-3"
              >
                &times;
              </button>
            </div>

            <AuthLinks />
            <AuthForm />
            <AuthSocials />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
