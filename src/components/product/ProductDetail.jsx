import BreadCrumb from "../ui/BreadCrumb";
import { motion } from "motion/react";
import QualityControl from "../ui/QualitityControl";
import visa from "../../assets/payment_icon/visa.png";
import mastercard from "../..//assets/payment_icon/mastercard.png";
import americanExpress from "../../assets/payment_icon/american-express.png";
import discover from "../../assets/payment_icon/discover.png";
import { useCallback, useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { useStoreActions } from "easy-peasy";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const ProductDetail = () => {
  const addToCart = useStoreActions((action) => action.addToCart);

  const {
    product,
    category,
    title,
    discountPrice,
    price,
    description,
    quantity,
    setQuantity,
    setNotificationOpen,
  } = useContext(ProductContext);

  const icons = [visa, mastercard, americanExpress, discover];

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  }, []);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, discountPrice });
    setNotificationOpen(true);

    setTimeout(() => {
      setNotificationOpen(false);
      setQuantity(1);
    }, 5000);
  };

  return (
    <div className="">
      <BreadCrumb />
      <h2 className="text-gray-600 text-sm">{category}</h2>
      <h3 className="mt-2 text-lg tablet:text-xl tracking-wide">{title}</h3>

      <div className="flex items-end space-x-2 mt-2">
        <p className="text-3xl">
          <span className="line-through font-light text-gray-500">
            $ {price}
          </span>{" "}
          -{" "}
          <span className="text-orange-500 font-medium">$ {discountPrice}</span>
        </p>
        <p className="text-xs">& Free Shipping</p>
      </div>

      <p className="mt-3 text-sm">{`${description.slice(0, 100)}...`}</p>

      <hr className="mt-6 mb-4 border-gray-300" />

      <div className="flex space-x-3">
        <QualityControl
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          type="button"
          className="grow text-base text-white flex justify-around items-center bg-orange-500 hover:bg-orange-600 transition py-0.5 px-3 rounded-md cursor-pointer"
        >
          <HiOutlineShoppingCart className="pointer-events-none" />
          ADD TO CART
        </motion.button>
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
    </div>
  );
};

export default ProductDetail;
