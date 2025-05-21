import { useContext } from "react";
import CheckoutContext from "../contexts/CheckoutContext";

const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};

export default useCheckoutContext;
