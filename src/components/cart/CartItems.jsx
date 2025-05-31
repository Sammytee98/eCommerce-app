import { useStoreActions } from "easy-peasy";
import { FaXmark } from "react-icons/fa6";
import QualityControl from "../ui/QualitityControl";

const CartItems = ({ cartItems }) => {
  const updateCartItem = useStoreActions((action) => action.updateCartItem);
  const removeFromCart = useStoreActions((action) => action.removeFromCart);

  const cartDynamicStyle =
    "w-full flex justify-between items-center laptop:flex-col laptop:space-y-2 px-2 py-3.5 border-b-1 border-b-gray-300";

  return (
    <section className="mb-5 laptop:w-2/3">
      {/* Render cart items */}
      <div>
        {cartItems.map((item) => {
          const { id, image, title, discountPrice, quantity } = item;

          return (
            <div
              key={id}
              className="w-full laptop:flex space-x-2 h-auto border-1 border-gray-300"
            >
              <div className="w-full laptop:w-3/12 flex items-center justify-end px-2 py-3.5 border-b-1 border-b-gray-300">
                <FaXmark
                  onClick={() => removeFromCart(id)}
                  className="text-xs border-1 border-gray-500 text-gray-500 hover:text-gray-800 hover:border-gray-800 transition rounded-full cursor-pointer"
                />
              </div>

              <div className="py-2 w-full flex justify-center border-gray-300">
                <img src={image} alt={title} className="w-14 h-16" />
              </div>

              <div className={cartDynamicStyle}>
                <strong className="text-sm text-gray-700 grow">Product:</strong>
                <p
                  className="truncate max-w-[150px] text-sm tablet:text-sm text-orange-500"
                  title={title}
                >
                  {title}
                </p>
              </div>

              <div className={cartDynamicStyle}>
                <strong className="text-sm text-gray-700 grow">Price:</strong>
                <p className="text-sm tablet:text-sm">${discountPrice}</p>
              </div>

              <div className={cartDynamicStyle}>
                <strong className="text-sm text-gray-700 grow">
                  Quantity:
                </strong>
                <QualityControl
                  quantity={quantity}
                  increaseQuantity={() =>
                    updateCartItem({ id, action: "increase" })
                  }
                  decreaseQuantity={() =>
                    updateCartItem({ id, action: "decrease" })
                  }
                />
              </div>

              <div className="w-full flex justify-between laptop:flex-col items-center px-2 py-3.5">
                <strong className="text-sm text-gray-700 grow">
                  Subtotal:
                </strong>
                <p className="text-sm tablet:text-sm">
                  ${(quantity * discountPrice).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CartItems;
