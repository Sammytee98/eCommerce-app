import { motion } from "framer-motion";

const QualityControl = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="w-fit h-fit flex">
      <motion.button
        whileTap={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={decreaseQuantity}
        type="button"
        className="border-2 border-gray-200 rounded-l-md px-2.5 py-0.5 cursor-pointer hover:bg-gray-200 transition"
      >
        &#8722;
      </motion.button>
      <p className="border-2 border-gray-200 px-2.5 py-0.5">{quantity}</p>
      <motion.button
        whileTap={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={increaseQuantity}
        type="button"
        className="border-2 border-gray-200 rounded-r-md px-2.5 py-0.5 cursor-pointer hover:bg-gray-200 transition"
      >
        &#43;
      </motion.button>
    </div>
  );
};

export default QualityControl;
