import CC from "../../assets/cc.png";
import useCheckoutContext from "../../hooks/useCheckoutContext";

const CardDetails = () => {
  // Access current card details and handler from CheckoutContext
  const { cardDetails, handleCardDetailsChange } = useCheckoutContext();
  const { cardHolderName, cardNumber, cardExp, cardCVV } = cardDetails;

  return (
    <section className="space-y-4">
      <h4 className="text-lg text-gray-900 font-semibold flex space-x-2 items-center">
        <span>Card Details</span>
        <img src={CC} alt="Paypal Logo" className="w-14 h-10" />
      </h4>

      {/* Card Form Fields */}
      <div className="grid grid-cols-2 gap-3 px-2">
        <div className="flex flex-col col-span-full space-y-1">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="cardHolderName"
          >
            Cardholder Name
          </label>
          <input
            onChange={handleCardDetailsChange}
            className="w-full h-10 bg-gray-50 border-2 border-gray-300 focus:outline-orange-500 rounded-md px-3 py-0.5 text-xs"
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            placeholder="John Doe"
            value={cardHolderName}
            autoComplete="cc-name"
            required
          />
        </div>

        <div className="flex flex-col col-span-full space-y-1">
          <label
            className="text-sm text-gray-700 font-medium"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            onChange={handleCardDetailsChange}
            className="w-full h-10 bg-gray-50 border-2 border-gray-300 focus:outline-orange-500 rounded-md px-3 py-0.5 text-xs"
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            autoComplete="cc-number"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm text-gray-700 font-medium" htmlFor="exp">
            Expiry Date
          </label>
          <input
            onChange={handleCardDetailsChange}
            className="w-full h-10 bg-gray-50 border-2 border-gray-300 focus:outline-orange-500 rounded-md px-3 py-0.5 text-xs"
            type="text"
            id="exp"
            name="cardExp"
            placeholder="MM/YY"
            value={cardExp}
            autoComplete="cc-exp"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm text-gray-700 font-medium" htmlFor="cvv">
            CVV
          </label>
          <input
            onChange={handleCardDetailsChange}
            className="w-full h-10 bg-gray-50 border-2 border-gray-300 focus:outline-orange-500 rounded-md px-3 py-0.5 text-xs"
            type="password"
            id="cvv"
            name="cardCVV"
            placeholder="123"
            maxLength="3"
            value={cardCVV}
            autoComplete="cc-number"
            required
          />
          <p className="text-xs italic text-gray-500">
            3 digits on back of your card
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
