import { useStoreActions, useStoreState } from "easy-peasy";
import useCheckoutContext from "../../hooks/useCheckoutContext";
import { useEffect } from "react";

const OrderRecap = () => {
  // Pull orderTotal and its setter from context
  const { orderTotal, setOrderTotal } = useCheckoutContext();
  // Fetch cartItems from the global store
  const cartItems = useStoreState((state) => state.cartItems);

  // Modify cart items, add subtotal to the existing key-value pair
  const modifiedItem = cartItems.map((item) => {
    return { ...item, subtotal: item.quantity * item.discountPrice };
  });

  // Calculate the subtotal of all item in the cart
  const subtotalCalc = modifiedItem.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );

  const shippingFee = "0.00";
  const total = subtotalCalc + Number(shippingFee);
  const formattedTotal = total.toFixed(2);

  // Side effect to setOrderTotal to the formattedTotal whenever formattedTotal value changes
  useEffect(() => {
    setOrderTotal(formattedTotal);
  }, [formattedTotal]);

  return (
    <section className="mt-8 text-sm text-gray-900">
      <div className="flex justify-between items-center border-b-2 border-t-2 border-gray-300 py-2">
        <p>Subtotal</p>
        <p>${subtotalCalc.toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center border-b-2 border-b-gray-300 py-2">
        <p>Shipping</p>
        <p>${shippingFee}</p>
      </div>

      <div className="flex justify-between items-center border-b-2 border-b-gray-300 py-2">
        <p>Total</p>
        <p className="font-bold text-lg">${orderTotal}</p>
      </div>
    </section>
  );
};

export default OrderRecap;
