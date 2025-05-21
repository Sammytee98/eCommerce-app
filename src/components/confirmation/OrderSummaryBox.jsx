import { format, addBusinessDays } from "date-fns";
import useCheckoutContext from "../../hooks/useCheckoutContext";

const OrderSummaryBox = () => {
  const orderNumber = "GTS" + Date.now();
  const orderDate = new Date();
  const estimatedDate = addBusinessDays(orderDate, 5);
  const { totalPaid } = useCheckoutContext();
  const { cardDetails, paymentMethod, formData } = useCheckoutContext();

  const formattedOrderDate = format(orderDate, "MMMM d, yyyy");
  const formattedEstimedDate = format(estimatedDate, "MMMM d, yyyy");

  const { shipEmail } = formData;

  return (
    <section className="min-w-xs p-4 grid grid-cols-1 tablet:space-x-6 space-y-4 tablet:grid-cols-2 bg-gray-100 rounded-md shadow-md">
      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Order Number</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          {orderNumber}
        </p>
      </div>

      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Date Placed</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          {formattedOrderDate}
        </p>
      </div>

      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Email</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          {shipEmail}
        </p>
      </div>

      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Total Paid</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          ${totalPaid}
        </p>
      </div>

      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Payment Method</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          {paymentMethod.paypal
            ? "Paypal"
            : paymentMethod.cod
            ? "Cash on Delivery"
            : `Card ending in ${cardDetails.cardNumber.slice(14)}`}
        </p>
      </div>

      <div className="flex flex-col space-y-1 text-sm text-gray-500">
        <p>Estimated Delivery</p>
        <p className="text-base tablet:text-lg text-gray-800 font-medium">
          {`${formattedOrderDate} - ${formattedEstimedDate}`}
        </p>
      </div>
    </section>
  );
};

export default OrderSummaryBox;
