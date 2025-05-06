import { FaXmark } from "react-icons/fa6";
import { useStoreActions, useStoreState } from "easy-peasy";

const ShoppingCart = ({ handleCartClose }) => {
  const cartItems = useStoreState((state) => state.cartItems);
  const removeFromCart = useStoreActions((action) => action.removeFromCart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  const buttonStyle =
    "w-full tracking-wide mt-2.5 text-lg border-3 border-blue-300/70 py-1.5 rounded-md w-400px hover:bg-blue-300/70 transition cursor-pointer";

  return (
    <>
      <div className="w-full h-full py-1 flex flex-col font-oswald">
        <div className="w-full flex justify-between border-b-2 border-blue-300/20 pb-3">
          <h2 className="text-xl font-medium">SHOPPING CART</h2>
          <FaXmark
            onClick={handleCartClose}
            className="text-2xl  hover:border-3 hover:border-dotted hover:border-blue-300/50 cursor-pointer transition hover:bg-blue-300/50"
          />
        </div>

        <div className="grow my-3 overflow-y-auto">
          {cartItems.length ? (
            cartItems.map((item) => {
              const { id, thumbnail, title, quantity, discountPrice } = item;
              const totalPrice = (discountPrice * quantity).toFixed(2);

              return (
                <div key={id} className="py-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={thumbnail}
                        alt={title}
                        className="h-10 w-10 bg-blue-300/10 rounded-md"
                      />
                      <div className="space-y-1">
                        <h4 className="text-sm">{title}</h4>
                        <p className="flex text-xs items-center space-x-1 text-neutral-600 font-normal">
                          <span>{quantity}</span>
                          <span className="text-[10px]">X</span>
                          <span>${totalPrice}</span>
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => removeFromCart(id)}
                      className="border-2 border-blue-300/70 hover:text-white hover:bg-blue-300/20 transition cursor-pointer rounded-full grid place-items-center"
                    >
                      <FaXmark className="text-xs text-blue-300/70" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-full grid place-items-center">
              <p className="text-xl text-neutral-600">
                No Products in the Cart
              </p>
            </div>
          )}
        </div>

        {cartItems.length >= 1 && (
          <div className="w-full flex justify-between mb-3 items-center border-t-2 border-b-2 border-blue-300/20 py-1.5">
            <h5>SUBTOTAL:</h5>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        )}

        <button type="button" className={buttonStyle}>
          {cartItems.length ? "VIEW CART" : "CONTINUE SHOPPING"}
        </button>
        {cartItems.length >= 1 && (
          <button type="button" className={buttonStyle}>
            CHECKOUT
          </button>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
