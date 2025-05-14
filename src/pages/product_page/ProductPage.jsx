import { ProductProvider } from "../../contexts/ProductContext";
import ProductImageSwiper from "./ProductImageSwiper";
import ProductDetail from "./ProductDetail";
import MoreInfo from "./MoreInfo";
import RelatedProducts from "./RelatedProducts";
import CartNotification from "../../components/CartNotification";
import { useState } from "react";

const ProductPage = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <main className="px-2 font-oswald">
      <ProductProvider>
        {notificationOpen && <CartNotification />}

        <div className="my-10">
          <div className="flex flex-col laptop:flex-row items-center space-y-5 laptop:space-x-5 ">
            <ProductImageSwiper />
            <ProductDetail />
          </div>
          <MoreInfo />
          <RelatedProducts />
        </div>
      </ProductProvider>
    </main>
  );
};

export default ProductPage;
