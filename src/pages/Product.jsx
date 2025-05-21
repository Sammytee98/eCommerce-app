import ProductContext from "../contexts/ProductContext";
import ProductImageSwiper from "../components/product/ProductImageSwiper";
import ProductDetail from "../components/product/ProductDetail";
import MoreInfo from "../components/product/MoreInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import CartNotification from "../components/product/CartNotification";
import { useContext } from "react";

const ProductPage = () => {
  const { notificationOpen } = useContext(ProductContext);

  return (
    <main className="px-2 font-oswald">
      {notificationOpen && <CartNotification />}

      <div className="my-10">
        <div className="flex flex-col laptop:flex-row items-center space-y-5 laptop:space-x-5 ">
          <ProductImageSwiper />
          <ProductDetail />
        </div>
        <MoreInfo />
        <RelatedProducts />
      </div>
    </main>
  );
};

export default ProductPage;
