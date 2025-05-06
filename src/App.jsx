import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import { ProductProvider } from "./contexts/ProductContext";
import Home from "./pages/home/Home";
import ShopAll from "./pages/ShopAll";
import ProductPage from "./pages/product-page/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
          <Route path="products/:category/:id" element={<ProductPage />} />
          <Route
            path="products/category/:category"
            element={<CategoryPage />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
