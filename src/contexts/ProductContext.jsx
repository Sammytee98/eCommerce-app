import { createContext, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const toggleSection = useCallback((section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  // console.log(id);
  const allProducts = useStoreState((state) => state.allProducts);

  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    id: productId,
    images,
    category: cat,
    title,
    price,
    discountPercentage,
    description,
    reviews,
    weight,
    warrantyInformation: warranty,
  } = product;

  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  const category =
    cat.slice(0, 1).toUpperCase() + cat.slice(1, cat.length).toLowerCase();

  return (
    <ProductContext.Provider
      value={{
        productId,
        product,
        images,
        title,
        price,
        discountPrice,
        description,
        category,
        reviews,
        weight,
        warranty,
        openSection,
        toggleSection,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
