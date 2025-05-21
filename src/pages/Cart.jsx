import { useStoreState } from "easy-peasy";
import EmptyCartMessage from "../components/cart/EmptyCartMessage";
import CartItems from "../components/cart/CartItems";
import CartTotals from "../components/cart/CartTotals";

const Cart = () => {
  const cartItems = useStoreState((state) => state.cartItems);
  const totalQuantity = useStoreState((state) => state.totalQuantity);

  return (
    <main className="px-4 font-oswald space-y-10">
      <h2 className="text-2xl font-medium tracking-wide mt-3">
        CART&#40;<span className="text-orange-500">{totalQuantity}</span>&#41;
      </h2>
      {!cartItems.length && <EmptyCartMessage />}
      {cartItems.length > 0 && (
        <div className="laptop:flex tablet:space-x-2">
          <CartItems cartItems={cartItems} />
          <CartTotals cartItems={cartItems} />
        </div>
      )}
    </main>
  );
};

export default Cart;
