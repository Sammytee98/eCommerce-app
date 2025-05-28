import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { FaBoxOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center space-y-5 tablet:space-y-10 font-oswald  py-6 px-6"
    >
      <FaBoxOpen className="text-orange-500 text-6xl tablet:text-8xl" />
      <h2 className="text-5xl tablet:text-6xl text-center font-bold text-orange-500">
        404 &mdash; This page doesn't exist.
      </h2>
      <p className="">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6">
        <Button
          onClick={() => handleNavigate("/")}
          children="Back to Home"
          className="py-2"
        />
        <Button
          onClick={() => handleNavigate("/products")}
          children="Continue Shopping"
          className="py-2"
        />
      </div>
    </motion.main>
  );
};

export default Error;
