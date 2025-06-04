import BreadCrumb from "../layouts/BreadCrumb";
import Button from "../ui/Button";
import QualityControl from "../ui/QualitityControl";
import visa from "../../assets/payment_icon/visa.png";
import mastercard from "../..//assets/payment_icon/mastercard.png";
import americanExpress from "../../assets/payment_icon/american-express.png";
import discover from "../../assets/payment_icon/discover.png";
import { useCallback, useContext, useEffect, useRef } from "react";
import ProductContext from "../../contexts/ProductContext";
import { useStoreActions } from "easy-peasy";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProductDetail = () => {
  // Store actions
  const addToCart = useStoreActions((action) => action.addToCart);
  const addToWishlist = useStoreActions((action) => action.addToWishlist);
  const removeFromWishlist = useStoreActions(
    (action) => action.removeFromWishlist
  );

  // Context values
  const {
    product,
    productId,
    category,
    title,
    discountPrice,
    price,
    description,
    quantity,
    setQuantity,
    setNotificationOpen,
    addToWish,
    setAddToWish,
  } = useContext(ProductContext);

  const icons = [visa, mastercard, americanExpress, discover];

  // Avoid triggering useEffect on intial render
  const isMounted = useRef(false);

  // Increase product quantity
  const increaseQuantity = useCallback(
    () => setQuantity((prev) => prev + 1),
    []
  );

  // Decrease product quantity
  const decreaseQuantity = useCallback(
    () => setQuantity((prev) => (prev === 1 ? 1 : prev - 1)),
    []
  );

  // Add current product to cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity, discountPrice });
    setNotificationOpen((prev) => ({ ...prev, cart: true }));
    setQuantity(1);

    setTimeout(() => {
      setNotificationOpen((prev) => ({ ...prev, cart: false }));
    }, 5000);
  };

  // Add product to wishlist
  const handleAddtoWishlist = () => {
    addToWishlist({ ...product, discountPrice, quantity });
  };

  // Remove product from wishlist
  const handleRemoveFromWishlist = () => {
    removeFromWishlist(productId);
  };

  // Toggle wishlist addToWish state
  const handleWishlistToggle = () => {
    setAddToWish((prev) => !prev);
  };

  // Wishlist side-effect with initial render guard
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (addToWish) {
      handleAddtoWishlist();
      setNotificationOpen((prev) => ({ ...prev, wishlist: true }));

      setTimeout(() => {
        setNotificationOpen((prev) => ({ ...prev, wishlist: false }));
      }, 4000);
    } else {
      handleRemoveFromWishlist();
      setNotificationOpen((prev) => ({ ...prev, wishlist: true }));

      setTimeout(() => {
        setNotificationOpen((prev) => ({ ...prev, wishlist: false }));
      }, 4000);
    }
  }, [addToWish]);

  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="not-laptop:w-full"
    >
      <BreadCrumb />
      <h2 className="text-gray-600 text-sm">{category}</h2>
      <h3 className="mt-2 text-lg tablet:text-xl tracking-wide">{title}</h3>

      <div className="flex items-end space-x-2 mt-2">
        <p className="text-3xl">
          <span className="line-through font-light text-gray-500">
            $ {price}
          </span>{" "}
          - <span className="text-orange-500 font-bold">$ {discountPrice}</span>
        </p>
        <p className="text-xs">& Free Shipping</p>
      </div>

      <p className="mt-3 text-sm">{`${description.slice(0, 100)}...`}</p>

      <hr className="mt-6 mb-4 border-gray-300" />

      <div className="flex items-center space-x-4">
        <QualityControl
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <Button
          onClick={handleAddToCart}
          type="button"
          className="grow text-base text-white flex justify-around space-x-2 items-center bg-orange-500 hover:bg-orange-600 transition py-0.5 rounded-md cursor-pointer"
        >
          <HiOutlineShoppingCart className="pointer-events-none" />
          <span className="uppercase">add to cart</span>
        </Button>

        <button
          className="cursor-pointer text-2xl"
          onClick={handleWishlistToggle}
        >
          {addToWish ? (
            <FaHeart className="text-orange-500 " />
          ) : (
            <FaRegHeart className="text-orange-500" />
          )}
        </button>
      </div>

      <hr className="my-4 border-gray-300" />

      <p className="text-sm">
        Category: <span className="text-orange-500">{category}</span>
      </p>

      <fieldset className="border border-gray-300 my-4">
        <legend className="text-center">Guaranteed Safe Checkout</legend>

        <div className="flex items-center mx-auto space-x-2 w-fit my-2">
          {icons.map((icon, id) => (
            <div key={id + 1} className="h-10 w-14 flex rounded">
              <img
                src={icon}
                alt="Payment Logo"
                className="w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </fieldset>
    </motion.section>
  );
};

export default ProductDetail;
