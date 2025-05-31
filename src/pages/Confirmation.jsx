import SuccessIcon from "../components/ui/SuccessIcon";
import OrderSummaryBox from "../components/confirmation/OrderSummaryBox";
import ShippingAddress from "../components/confirmation/ShippingAddress";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { motion } from "framer-motion";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/products");
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4 }}
      className=" flex flex-col items-center font-oswald space-y-8 pb-8 pt-4 px-6"
    >
      <SuccessIcon />

      <div className="w-full space-y-2 text-center">
        <h2 className="text-2xl tablet:text-3xl font-bold text-gray-800">
          Thank you for your order!
        </h2>
        <p className="text-sm tablet:text-base text-gray-600">
          We've recieved your order and will contact you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 w-full max-w-[900px]">
        <OrderSummaryBox />
        <ShippingAddress />
      </div>

      <div className="w-full max-w-[900px] grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-8">
        <Button
          children="Go to Orders"
          className="py-2.5"
          onClick={() => alert("Order page has not been implemented yet.")}
        />
        <Button
          children="Continue Shoping"
          className="py-2.5 "
          onClick={handleClick}
        />
      </div>
    </motion.main>
  );
};

export default Confirmation;
