import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import ReviewOrder from "./ReviewOrder";
import Payment from "./Payment";
import useFormContext from "../../hooks/useFormContext";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <BillingForm />,
    1: <ShippingForm />,
    2: <ReviewOrder />,
    3: <Payment />,
  };

  const content = (
    <div className=" tablet:shadow-sm grid grid-cols-2 gap-3 px-3 py-5 rounded-md">
      {display[page]}
    </div>
  );

  return content;
};

export default FormInputs;
