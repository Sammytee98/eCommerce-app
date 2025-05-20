const PaymentMethod = ({ handlePaymentSelect }) => {
  return (
    <section className="w-full space-y-2">
      <h4 className="text-sm font-medium">Select a payment method</h4>

      <div className="flex space-x-3 text-sm px-2">
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            onClick={handlePaymentSelect}
            type="radio"
            name="payment"
            id="card"
            value="card"
          />{" "}
          <label
            htmlFor="card"
            className="px-3 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Card
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            onClick={handlePaymentSelect}
            type="radio"
            name="payment"
            id="paypal"
            value="paypal"
          />{" "}
          <label
            htmlFor="paypal"
            className="px-3 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Paypal
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="hidden peer"
            onClick={handlePaymentSelect}
            type="radio"
            name="payment"
            id="cod"
            value="cod"
          />{" "}
          <label
            htmlFor="cod"
            className="px-3 py-1 border-2 border-gray-300 peer-checked:border-orange-500 rounded-md cursor-pointer"
          >
            Cash on Delivery
          </label>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
