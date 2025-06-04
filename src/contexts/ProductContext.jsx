import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useStoreState } from "easy-peasy";
import axios from "axios";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// Create product context
const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const { id } = useParams();

  // UI sates
  const [product, setProduct] = useState(null); // Product
  const [err, setErr] = useState(null); // Fetch error if failed to fetch product
  const [loading, setLoading] = useState(false); // Loading state when product is fetching
  const [openSection, setOpenSection] = useState(null); // For toggling additional info/description/review...
  const [quantity, setQuantity] = useState(1); // Product quantity
  const [notificationOpen, setNotificationOpen] = useState({
    cart: false,
    wishlist: false,
  });
  const [addToWish, setAddToWish] = useState(false); // Wishlist toggle

  // Handle toggling product accordion sections
  const toggleSection = useCallback((section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  // Fetch product using id from id from param
  useEffect(() => {
    const controller = new AbortController(); // create an abort control
    const signal = controller.signal;

    setLoading(true);
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
          { signal } // pass the signal to axios
        );
        setProduct(res.data);
        setErr(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch aborted");
        } else {
          console.log("Failed to fetch product:", err);
          setErr(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
    return () => {
      controller.abort(); // abort the fetch on cleanup
    };
  }, [id]);

  // Allow context to mount regardless of loading/error state
  const productId = product?.id;
  const image = product?.image;
  const cat = product?.category;
  const title = product?.title;
  const price = product?.price;
  const description = product?.description;

  // Discount logic
  const discountPercentage = product?.discountPercentage || 3;
  const discountPrice = product
    ? ((price * (100 - discountPercentage)) / 100).toFixed(2)
    : null;

  // Format category name (capitalize first letter)
  const category = cat
    ? cat.slice(0, 1).toUpperCase() + cat.slice(1, cat.length).toLowerCase()
    : "";

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
        loading,
        err,
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
