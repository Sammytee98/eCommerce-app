import { FaLock } from "react-icons/fa6";
import Button from "../ui/Button";
import paypalLogo from "../../assets/paypal.png";

const PaypalPayment = () => {
  return (
    <div className="space-y-2 flex flex-col">
      <h4 className="text-lg text-gray-900 font-semibold flex space-x-2 items-center">
        <span>Pay with Paypal</span>
        <img src={paypalLogo} alt="Paypal Logo" className="w-4 h-4" />
      </h4>

      <p className="mx-2 text-sm flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
        <FaLock />
        <span className="italic">
          You will be redirected to paypal to securely complete your purchase.
        </span>
      </p>

      <a href="https://paypal.com" target="_blank" className="self-end">
        <Button className="flex space-x-2 items-center">
          <img src={paypalLogo} alt="Paypal Logo" className="w-4 h-4" />
          <span>Continue to Paypal</span>
        </Button>
      </a>
    </div>
  );
};

export default PaypalPayment;
