import ProductContext from "../contexts/ProductContext";
import ProductImageSwiper from "../components/product/ProductImageSwiper";
import ProductDetail from "../components/product/ProductDetail";
import MoreInfo from "../components/product/MoreInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import CartNotification from "../components/product/CartNotification";
import WishlistNotification from "../components/product/WishlistNotification";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProductPage = () => {
  const { notificationOpen, addToWish } = useContext(ProductContext);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className=" font-oswald"
    >
      <AnimatePresence mode="wait"></AnimatePresence>
      {notificationOpen.cart && <CartNotification />}
      {notificationOpen.wishlist && (
        <WishlistNotification
          children={
            addToWish
              ? "Item has been added to wishlist"
              : "Item has been removed from wishlist"
          }
        />
      )}

      <div className="my-10 px-2">
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
