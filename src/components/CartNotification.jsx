import { useContext } from "react";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import ScrollToTop from "../layouts/ScrollToTop";

const CartNotification = () => {
  const { title, quantity } = useContext(ProductContext);

  return (
    <div className="w-full flex flex-col mobile:flex-row mobile:justify-between mobile:items-center space-y-3 border-t-2 border-t-orange-500 bg-gray-100 p-3 rounded-b-md">
      <ScrollToTop />
      <div className="flex space-x-3 items-center">
        <FaCheckCircle className="text-green-500 text-sm" />
        <p className="flex items-center text-sm text-wrap">
          <strong>{quantity}</strong>{" "}
          <span className="text-[12px] mx-1.5">x</span>{" "}
          <span
            className="italic mr-1.5 truncate max-w-[200px] max-mobile:max-w-[100px]"
            title={title}
          >
            {`"${title}"`}
          </span>{" "}
          <span>have been added to your cart.</span>
        </p>
      </div>
      <Link to="/cart" className="max-mobile:self-end">
        <Button children="VIEW CART" type="button" />
      </Link>
    </div>
  );
};

export default CartNotification;
