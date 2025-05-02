import { ProductProvider } from "../../contexts/ProductContext";
import ProductImageSwiper from "./ProductImageSwiper";
import ProductDetail from "./ProductDetail";
import MoreInfo from "./MoreInfo";
import RelatedProducts from "./RelatedProducts";

const ProductPage = () => {
  return (
    <main className="my-10 p-5 font-oswald">
      <ProductProvider>
        <div className="flex flex-col desktop:flex-row items-center space-y-5 desktop:space-x-5">
          <ProductImageSwiper />
          <ProductDetail />
        </div>
        <MoreInfo />
        <RelatedProducts />
      </ProductProvider>
    </main>
  );
};

export default ProductPage;
