import { FaXmark } from "react-icons/fa6";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button from "../ui/Button";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

const Wishlist = ({ setWishlistOpen }) => {
  // Global actions & state
  const addToCart = useStoreActions((action) => action.addToCart);
  const wishlistItems = useStoreState((state) => state.wishlistItems);
  const removeFromWishlist = useStoreActions(
    (action) => action.removeFromWishlist
  );

  // Local state for showing toast notification
  const [cartNotificationOpen, setCartNotificationOpen] = useState(false);
  const [deleteNotificationOpen, setDeleteNotificationOpen] = useState(false);

  // Handle close button
  const handleWishlistClose = useCallback(() => {
    setWishlistOpen(false);
  }, []);

  // Add item to cart, removes from wishlist, shows toast
  const handleAddToCart = (product, quantity = 1, price, id) => {
    addToCart({ ...product, quantity, price });
    setCartNotificationOpen(true);

    removeFromWishlist(id);

    setTimeout(() => {
      setCartNotificationOpen(false);
    }, 5000);
  };

  // Remove from wishlist
  const handleDelete = (id) => {
    removeFromWishlist(id);
    setDeleteNotificationOpen(true);

    setTimeout(() => {
      setDeleteNotificationOpen(false);
    }, 5000);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col font-oswald relative">
        {/* Toast for add to cart */}
        {cartNotificationOpen && (
          <motion.p
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full absolute py-2 bg-green-500 text-white text-xs text-center"
          >
            Your cart has been updated.
          </motion.p>
        )}
        {/* Toast for delete */}
        {deleteNotificationOpen && (
          <motion.p
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full absolute py-2 bg-green-500 text-white text-xs text-center"
          >
            Item has been removed from wishlist.
          </motion.p>
        )}

        {/* === Wishlist Header === */}
        <div className="w-full flex justify-between items-center border-b-2 border-gray-200 p-2">
          <h2 className="text-xl font-medium text-gray-800">WHISHLISTS</h2>
          <FaXmark
            onClick={handleWishlistClose}
            className="text-xl text-gray-700 hover:text-orange-600 cursor-pointer transition"
          />
        </div>

        {/* === Wishlist Items === */}
        <div className="w-full grow space-y-2 overflow-y-auto bg-gray-100">
          {wishlistItems.length ? (
            wishlistItems.map((item) => {
              const {
                id,
                image,
                title,
                quantity,
                discountPrice,
                discountPercentage,
              } = item;

              return (
                <div key={id} className="bg-white w-full shadow p-2">
                  <div className="border-b-1 border-b-gray-200 flex justify-between items-center space-x-3 pb-2">
                    <img
                      src={image}
                      alt={title}
                      className="h-8 w-8 bg-gray-100 rounded-md"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <h4 className="text-sm text-gray-800 truncate max-w-68">
                        {title}
                      </h4>
                      <div>
                        <p className="flex text-sm items-center space-x-1 text-gray-600 font-normal">
                          ${discountPrice}
                        </p>
                        <p>{discountPercentage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center space-x-3 pt-2">
                    <Button
                      onClick={() => handleDelete(id)}
                      type="button"
                      variant="outine"
                      className="text-orange-500 text-xs shadow-none"
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() =>
                        handleAddToCart(item, quantity, discountPrice, id)
                      }
                      type="button"
                      children="Add to Cart"
                      className="text-xs py-1"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-full grid place-items-center">
              <p className="text-base text-gray-500">No Products in Wishlist</p>
            </div>
          )}
        </div>

        {/* <Link to={wishlistItems.length ? "/cart" : "/products"}>
          <Button
            onClick={handleWishlistClose}
            type="button"
            className="w-full"
          >
            {wishlistItems.length ? "VIEW CART" : "CONTINUE SHOPPING"}
          </Button>
        </Link>
        {wishlistItems.length >= 1 && (
          <Link to="checkout" className="mt-2.5">
            <Button
              type="button"
              onClick={handleWishlistClose}
              children="CHECKOUT"
              className="w-full"
            />
          </Link>
        )} */}
      </div>
    </>
  );
};

export default Wishlist;
