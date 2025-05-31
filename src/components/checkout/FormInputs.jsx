import BillingForm from "../forms/BillingForm";
import ShippingForm from "../forms/ShippingForm";
import ReviewOrder from "./ReviewOrder";
import PaymentSection from "./PaymentSection";
import useCheckoutContext from "../../hooks/useCheckoutContext";
import { AnimatePresence, motion } from "framer-motion";

const FormInputs = () => {
  const { page } = useCheckoutContext();
  const inputFieldStyle =
    "w-full h-10 text-xs border-2 border-gray-300 px-2 rounded-md border-gray-300 focus:outline-orange-500";

  // Pages display object
  const display = {
    0: <BillingForm inputFieldStyle={inputFieldStyle} />,
    1: <ShippingForm inputFieldStyle={inputFieldStyle} />,
    2: <ReviewOrder />,
    3: <PaymentSection />,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className=" tablet:shadow-sm grid grid-cols-2 gap-3 rounded-md"
      >
        {display[page]}
      </motion.div>
    </AnimatePresence>
  );
};

export default FormInputs;
