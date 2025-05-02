import { FaXmark } from "react-icons/fa6";

const CartPage = () => {
  return (
    <>
      <div>
        <div>
          <h2>SHOPPING CART</h2>
          <FaXmark className="text-2xl hover:border-3 hover:border-dotted hover:border-blue-300/50 cursor-pointer transition hover:bg-blue-300/50" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
