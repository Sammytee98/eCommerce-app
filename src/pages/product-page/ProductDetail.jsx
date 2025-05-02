import BreadCrumb from "../../components/BreadCrumb";
import { motion } from "motion/react";
import visa from "../../assets/payment_icon/visa.png";
import mastercard from "../..//assets/payment_icon/mastercard.png";
import americanExpress from "../../assets/payment_icon/american-express.png";
import discover from "../../assets/payment_icon/discover.png";
import { useCallback, useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const ProductDetail = () => {
  const {
    category,
    title,
    discountPrice,
    price,
    description,
    quantity,
    setQuantity,
  } = useContext(ProductContext);

  const icons = [visa, mastercard, americanExpress, discover];

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => (prev += 1));
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => (prev === 1 ? 1 : (prev -= 1)));
  });

  return (
    <div className="">
      <BreadCrumb />
      <h2 className="text-neutral-600">{category}</h2>
      <h3 className="mt-2 text-2xl tracking-wide">{title}</h3>

      <div className="flex items-end space-x-1.5 mt-2">
        <p className="text-2xl font-medium text-blue-300/70">
          <span>$ {discountPrice}</span> -{" "}
          <span className="line-through">$ {price}</span>
        </p>
        <p className="">& Free Shipping</p>
      </div>

      <p className="mt-2 text-lg">{description}</p>

      <hr className="mt-6 mb-4 border-blue-300/30" />

      <div className="flex space-x-3">
        <div className="w-fit flex">
          <motion.button
            whileTap={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={decreaseQuantity}
            type="button"
            className="border-2 border-neutral-200 rounded-l-md px-3 py-0.5 cursor-pointer hover:bg-neutral-200 transition"
          >
            &#8722;
          </motion.button>
          <p className="border-2 border-neutral-200 px-3 py-0.5">{quantity}</p>
          <motion.button
            whileTap={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={increaseQuantity}
            type="button"
            className="border-2 border-neutral-200 rounded-r-md px-3 py-0.5 cursor-pointer hover:bg-neutral-200 transition"
          >
            &#43;
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          className="w-3/6 bg-blue-300/50 hover:bg-blue-300/80 transition py-0.5 rounded-md cursor-pointer"
        >
          ADD TO CART
        </motion.button>
      </div>

      <hr className="my-4 border-blue-300/30" />

      <p>
        Category: <span className="text-blue-300/70">{category}</span>
      </p>

      <fieldset className="border border-blue-300/50 my-4">
        <legend className="text-center">Guaranteed Safe Checkout</legend>

        <div className="flex items-center mx-auto space-x-2 w-fit my-3">
          {icons.map((icon, id) => (
            <div key={id + 1} className="h-12 w-16 flex bg-white rounded">
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
