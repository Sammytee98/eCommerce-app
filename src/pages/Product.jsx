import ProductContext from "../contexts/ProductContext";
import ProductImageSwiper from "../components/product/ProductImageSwiper";
import ProductDetail from "../components/product/ProductDetail";
import MoreInfo from "../components/product/MoreInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import CartNotification from "../components/product/CartNotification";
import { useContext } from "react";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { notificationOpen } = useContext(ProductContext);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-2 font-oswald"
    >
      {notificationOpen && <CartNotification />}

      <div className="my-10">
        <div className="flex flex-col laptop:flex-row items-center space-y-5 laptop:space-x-5 ">
          <ProductImageSwiper />
          <ProductDetail />
        </div>
        <MoreInfo />
        <RelatedProducts />
      </div>
    </motion.main>
  );
};

export default ProductPage;
