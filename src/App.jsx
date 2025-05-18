import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/home/Home";
import ShopAll from "./pages/ShopAll";
import ProductPage from "./pages/product_page/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/cart_page/CartPage";
import Checkout from "./pages/info/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "./contexts/ProductContext";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  const queryClient = new QueryClient();

  const fetchCategoryProducts = useStoreActions(
    (actions) => actions.fetchCategoryProducts
  );

  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ShopAll />} />
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
          <Route path="cart" element={<CartPage />} />
          <Route
            path="checkout"
            element={
              <FormProvider>
                <Checkout />
              </FormProvider>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
