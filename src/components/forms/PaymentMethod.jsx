import useCheckoutContext from "../../hooks/useCheckoutContext";

const PaymentMethod = ({ handlePaymentSelect }) => {
  const { register, errors } = useCheckoutContext();

  return (
    <section className="w-full space-y-2">
      <h4 className="text-lg font-medium">Select a payment method</h4>

      <div className="flex space-x-3 text-sm px-1">
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            type="radio"
            id="card"
            value="card"
            {...register("paymentMethod")}
          />{" "}
          <label
            htmlFor="card"
            className="px-2.5 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Card
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            type="radio"
            id="paypal"
            value="paypal"
            {...register("paymentMethod")}
          />{" "}
          <label
            htmlFor="paypal"
            className="px-2.5 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Paypal
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            type="radio"
            id="cod"
            value="cod"
            {...register("paymentMethod")}
          />{" "}
          <label
            htmlFor="cod"
            className="px-2.5 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Cash on Delivery
          </label>
        </div>
      </div>
      {errors.PaymentMethod && (
        <p className="text-xs text-red-600 mt-2">
          {errors.PaymentMethod.message}
        </p>
      )}
    </section>
  );
};

export default PaymentMethod;
