import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-6 text-gray-900">
      <motion.a
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        target="_blank"
        href="https://facebook.com"
      >
        <FaFacebook className=" text-lg tablet:text-xl" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        target="_blank"
        href="https://youtube.com"
      >
        <FaYoutube className="text-lg tablet:text-xl" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        target="_blank"
        href="https://instagram.com"
      >
        <FaInstagram className=" text-lg tablet:text-xl" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        target="_blank"
        href="https://twitter.com"
      >
        <FaTwitter className=" text-lg tablet:text-xl" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        target="_blank"
        href="https://gmail.com"
      >
        <FaGoogle className=" text-lg tablet:text-xl" />
      </motion.a>
    </div>
  );
};

export default memo(Socials);
