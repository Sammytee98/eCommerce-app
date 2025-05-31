import ScrollToTop from "../../layouts/ScrollToTop";
import PaymentMethod from "../forms/PaymentMethod";
import CardDetails from "../forms/CardDetails";
import PaypalPayment from "./PaypalPayment";
import CodPayment from "./CodPayment";
import OrderRecap from "./OrderRecap";
import useCheckoutContext from "../../hooks/useCheckoutContext";

const PaymentSection = () => {
  const { paymentMethod, setPaymentMethod, watch } = useCheckoutContext();

  const selectedPayment = watch("paymentMethod");

  return (
    <section className="w-full p-5 tablet:p-8 bg-gray-100 rounded-md space-y-6 col-span-full">
      <ScrollToTop />

      <h3 className="text-xl text-gray-900 font-semibold">Payment Details</h3>

      {/* <PaymentMethod handlePaymentSelect={handlePaymentSelect} /> */}
      <PaymentMethod />

      {selectedPayment === "card" && <CardDetails />}

      {selectedPayment === "paypal" && <PaypalPayment />}

      {selectedPayment === "cod" && <CodPayment />}

      <OrderRecap />
    </section>
  );
};

export default PaymentSection;
