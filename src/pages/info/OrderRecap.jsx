import { useStoreState } from "easy-peasy";

const OrderRecap = () => {
  const cartItems = useStoreState((state) => state.cartItems);

  const modifiedItem = cartItems.map((item) => {
    return { ...item, subtotal: item.quantity * item.discountPrice };
  });

  const subtotalCalc = modifiedItem.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const shippingFee = "0.00";

  return (
    <section className="mt-8 text-sm text-gray-900">
      <div className="flex justify-between items-center border-b-2 border-t-2 border-gray-300 py-2">
        <p>Subtotal</p>
        <p>${subtotalCalc}</p>
      </div>

      <div className="flex justify-between items-center border-b-2 border-b-gray-300 py-2">
        <p>Shipping</p>
        <p>${shippingFee}</p>
      </div>

      <div className="flex justify-between items-center border-b-2 border-b-gray-300 py-2">
        <p>Total</p>
        <p className="font-bold text-lg">
          ${subtotalCalc + Number(shippingFee)}
        </p>
      </div>
    </section>
  );
};

export default OrderRecap;
