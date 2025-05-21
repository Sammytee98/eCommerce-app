import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import ReviewOrder from "../checkout/ReviewOrder";
import PaymentSection from "../checkout/PaymentSection";
import useCheckoutContext from "../../hooks/useCheckoutContext";

const FormInputs = () => {
  const { page } = useCheckoutContext();
  const inputFieldStyle =
    "w-full h-10 text-xs border-2 border-gray-300 px-2 rounded-md border-gray-300 focus:outline-orange-500";

  const display = {
    0: <BillingForm inputFieldStyle={inputFieldStyle} />,
    1: <ShippingForm inputFieldStyle={inputFieldStyle} />,
    2: <ReviewOrder />,
    3: <PaymentSection />,
  };

  const content = (
    <div className=" tablet:shadow-sm grid grid-cols-2 gap-3 rounded-md">
      {display[page]}
    </div>
  );

  return content;
};

export default FormInputs;
