import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const SuccessIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="rounded-full p-3 bg-green-100"
    >
      <div className="rounded-full p-3 bg-green-200">
        <FaCircleCheck className="w-16 h-16 text-green-600 bg-green-300 p-3 rounded-full" />
      </div>
    </motion.div>
  );
};

export default SuccessIcon;
