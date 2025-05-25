import { useStoreState } from "easy-peasy";
import EmptyCartMessage from "../components/cart/EmptyCartMessage";
import CartItems from "../components/cart/CartItems";
import CartTotals from "../components/cart/CartTotals";
import { motion } from "framer-motion";

const Cart = () => {
  const cartItems = useStoreState((state) => state.cartItems);
  const totalQuantity = useStoreState((state) => state.totalQuantity);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 font-oswald space-y-10"
    >
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
    </motion.main>
  );
};

export default Cart;
