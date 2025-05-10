import { useStoreState } from "easy-peasy";
import { FaXmark } from "react-icons/fa6";

const CartPage = () => {
  const cartItems = useStoreState((state) => state.cartItems);
  console.log(cartItems);

  return (
    <main>
      <section>
        <h2>CART</h2>

        <div>
          <div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
