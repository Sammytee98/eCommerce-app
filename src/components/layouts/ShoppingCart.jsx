import { FaXmark } from "react-icons/fa6";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button from "../ui/Button";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";

const ShoppingCart = ({ setCartOpen }) => {
  const location = useLocation(); // Get current route
  const cartItems = useStoreState((state) => state.cartItems); // Read cart items
  const removeFromCart = useStoreActions((action) => action.removeFromCart); // Action to remove item from cart

  // Close cart when visiting full cart page
  useEffect(() => {
    if (location.pathname === "/cart") {
      setCartOpen(false);
    }
  }, [location.pathname, setCartOpen]);

  // Calculate total cart price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  // Close cart manually
  const handleCartClose = useCallback(() => {
    setCartOpen(false);
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col font-oswald">
        <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-3">
          <h2 className="text-xl font-medium">SHOPPING CART</h2>
          <FaXmark
            onClick={handleCartClose}
            className="text-xl hover:text-orange-600 cursor-pointer transition"
          />
        </div>

        {/* Cart Items List */}
        <div className="grow space-y-1 overflow-y-auto">
          {cartItems.length ? (
            cartItems.map((item) => {
              const { id, image, title, quantity, discountPrice } = item;
              const totalPrice = (discountPrice * quantity).toFixed(2);

              return (
                <div
                  key={id}
                  className="flex justify-between items-center border-b-1 border-b-gray-200 py-2"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={image}
                      alt={title}
                      className="h-10 w-10 bg-gray-100 rounded-md"
                      loading="lazy"
                    />
                    <div className="space-y-1 ">
                      <h4 className="text-sm truncate max-w-48">{title}</h4>
                      <p className="flex text-xs items-center space-x-1 text-gray-600 font-normal">
                        <span>{quantity}</span>
                        <span className="text-[10px]">X</span>
                        <span>${totalPrice}</span>
                      </p>
                    </div>
                  </div>

                  {/* Remove Item */}
                  <div
                    onClick={() => removeFromCart(id)}
                    className="text-[12px] border-1 border-red-600 text-red-600 cursor-pointer rounded-full grid place-items-center"
                  >
                    <FaXmark />
                  </div>
                </div>
              );
            })
          ) : (
            // If cart is empty
            <div className="h-full grid place-items-center">
              <p className="text-lg text-gray-500">No Products in the Cart</p>
            </div>
          )}
        </div>

        {/* Subtotal display if cart not empty */}
        {cartItems.length >= 1 && (
          <div className="w-full flex justify-between mb-3 items-center border-t-2 border-b-2 border-gray-300 py-1.5">
            <h5>SUBTOTAL:</h5>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        )}

        {/* Primary action button: View cart or continue shopping */}
        <Link to={cartItems.length ? "/cart" : "/products"}>
          <Button onClick={handleCartClose} type="button" className="w-full">
            {cartItems.length ? "VIEW CART" : "CONTINUE SHOPPING"}
          </Button>
        </Link>

        {/* Checkout button if cart is not empty */}
        {cartItems.length >= 1 && (
          <Link to="checkout" className="mt-2.5">
            <Button
              type="button"
              onClick={handleCartClose}
              children="CHECKOUT"
              className="w-full"
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
