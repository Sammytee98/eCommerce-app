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
  const { notificationOpen, addToWish, loading, err, product } =
    useContext(ProductContext);
  console.log(loading);

  if (loading)
    return (
      <div className="w-fit flex items-center mx-auto mt-10 space-x-2">
        <LoadingSpinner />
        <span className="text-lg font-medium">loading...</span>
      </div>
    );

  if (err)
    return (
      <p className="text-xl text-red-600 text-center mt-10">
        Failed to fetch product: <span className="text-gray-700">{err}</span>
      </p>
    );

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

      <div className="my-10 px-3">
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
