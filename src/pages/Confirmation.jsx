import SuccessIcon from "../components/ui/SuccessIcon";
import OrderSummaryBox from "../components/confirmation/OrderSummaryBox";
import ShippingAddress from "../components/confirmation/ShippingAddress";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useCallback } from "react";

const Confirmation = () => {
  const navigate = useNavigate();
  const clearCartItems = useStoreActions((action) => action.clearCartItems);

  const handleClick = useCallback(() => {
    navigate("/products");
    clearCartItems();
  }, []);

  return (
    <main className=" flex flex-col items-center font-oswald space-y-8 pb-8 pt-4 px-2">
      <SuccessIcon />

      <div className="w-full space-y-2 text-center">
        <h2 className="text-2xl tablet:text-3xl font-bold text-gray-800">
          Thank you for your order!
        </h2>
        <p className="text-sm tablet:text-base text-gray-600">
          We've recieved your order and will contact you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
        <OrderSummaryBox />
        <ShippingAddress />
      </div>

      <div className="w-auto flex flex-col tablet:flex-row gap-4 tablet:gap-8">
        <Button
          children="Go to Orders"
          className="py-2.5 min-w-xs"
          onClick={() => alert("Order page is not implemented yet.")}
        />
        <Button
          children="Continue Shoping"
          className="py-2.5 min-w-xs"
          onClick={handleClick}
        />
      </div>
    </main>
  );
};

export default Confirmation;
