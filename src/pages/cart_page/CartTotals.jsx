import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const CartTotals = ({ cartItems }) => {
  const modifiedItem = cartItems.map((item) => {
    return { ...item, subtotal: item.quantity * item.discountPrice };
  });

  const subtotalCalc = modifiedItem.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const subtotal = subtotalCalc.toFixed(2);
  return (
    <section className="border-1 border-gray-300">
      <h3 className="w-full py-2 px-3 bg-gray-300  font-bold">CART TOTALS</h3>
      <div className="space-y-6 p-3.5">
        <div>
          <div className="flex justify-between items-center border-b-1 border-gray-300 text-sm py-2">
            <strong className="text-gray-700">Subtotal:</strong>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between items-center border-b-1 border-gray-300 text-sm py-2">
            <strong className="text-gray-700">Total:</strong>
            <p>${subtotal}</p>
          </div>
        </div>

        <form className="space-x-1 flex">
          <label htmlFor="coupon" className="hidden">
            Coupon
          </label>
          <input
            type="text"
            id="coupon"
            placeholder="Coupon code"
            className="border-1 px-2 py-1.5 text-sm grow border-gray-300 rounded-md"
          />
          <Button children="APPLY" />
        </form>

        <Link to="/checkout">
          <Button children="PROCEED TO CHECKOUT" className="w-full py-2.5" />
        </Link>
      </div>
    </section>
  );
};

export default CartTotals;
