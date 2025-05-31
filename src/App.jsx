import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/Product";
import CategoryPage from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "./contexts/ProductContext";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import { AnimatePresence } from "framer-motion";
import { AuthModalProvider } from "./contexts/AuthModalContext";
import AuthModal from "./components/AuthModal";

const App = () => {
  const queryClient = new QueryClient();
  const location = useLocation();

  const fetchCategoryProducts = useStoreActions(
    (actions) => actions.fetchCategoryProducts
  );

  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthModalProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<AllProducts />} />
              <Route
                path="products/:category/:id"
                element={
                  <ProductProvider>
                    <ProductPage />
                  </ProductProvider>
                }
              />
              <Route
                path="products/category/:category"
                element={<CategoryPage />}
              />
              <Route path="cart" element={<Cart />} />
              <Route
                path="checkout"
                element={
                  <CheckoutProvider>
                    <Checkout />
                  </CheckoutProvider>
                }
              />
              <Route
                path="/checkout/order-confirmation"
                element={
                  <CheckoutProvider>
                    <Confirmation />
                  </CheckoutProvider>
                }
              />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
          <AuthModal />
        </AnimatePresence>
      </AuthModalProvider>
    </QueryClientProvider>
  );
};

export default App;
