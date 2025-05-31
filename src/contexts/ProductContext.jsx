import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

// Create product context
const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const { id } = useParams();

  // UI sates
  const [openSection, setOpenSection] = useState(null); // For toggling additional info/description/review...
  const [quantity, setQuantity] = useState(1); // Product quantity
  const [notificationOpen, setNotificationOpen] = useState({
    cart: false,
    wishlist: false,
  });
  const [addToWish, setAddToWish] = useState(false); // Wishlist toggle

  // Fetch products from store
  const products = useStoreState((state) => state.products);

  // Handle toggling product accordion sections
  const toggleSection = useCallback((section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  // Get product by ID from store
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    <ProductContext.Provider value={{}}>
      <p className="text-center mt-10">Product not found.</p>;
    </ProductContext.Provider>;
  }

  // Destructure product values
  const {
    id: productId,
    image,
    category: cat,
    title,
    price,
    description,
  } = product;

  // Discount logic
  const discountPercentage = product.discountPercentage || 3;
  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  // Format category name (capitalize first letter)
  const category =
    cat.slice(0, 1).toUpperCase() + cat.slice(1, cat.length).toLowerCase();

  // Mock reviews
  const defaultReview = [
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "23-03-2021",
      reviewerName: "John Doe",
      rating: "4.5",
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
        weight: "4.3",
        warranty: "1 year warranty",
        openSection,
        toggleSection,
        quantity,
        setQuantity,
        notificationOpen,
        setNotificationOpen,
        addToWish,
        setAddToWish,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
