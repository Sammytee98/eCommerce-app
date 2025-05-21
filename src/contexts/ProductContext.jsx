import { createContext, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleSection = useCallback((section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  // console.log(id);
  const products = useStoreState((state) => state.products);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center">Couldn't find product</p>;
  }

  const {
    id: productId,
    image,
    category: cat,
    title,
    price,
    description,
  } = product;

  const discountPercentage = 3;

  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  const category =
    cat.slice(0, 1).toUpperCase() + cat.slice(1, cat.length).toLowerCase();

  const randomNum = useCallback((num) => {
    return (Math.random() * num + 1).toFixed(1);
  }, []);

  const defaultReview = [
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "23-03-2021",
      reviewerName: "John Doe",
      rating: randomNum(5),
    },
  ];

  return (
    <ProductContext.Provider
      value={{
        productId,
        product,
        image,
        title,
        price,
        discountPrice,
        description,
        cat,
        category,
        reviews: defaultReview,
        weight: randomNum(20),
        warranty: "1 year warranty",
        openSection,
        toggleSection,
        quantity,
        setQuantity,
        notificationOpen,
        setNotificationOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
