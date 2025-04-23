import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/ProductCard";
import Beauty from "./pages/categories/Beauty";
import Fragrances from "./pages/categories/Fragrances";
import Furnitures from "./pages/categories/Furnitures";
import Laptops from "./pages/categories/Laptops";
import Smartphones from "./pages/categories/Smartphones";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const App = () => {
  const fetchCategoryProducts = useStoreActions(
    (actions) => actions.fetchCategoryProducts
  );

  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ShopAll />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductCard />} />
          <Route path="category/beauty" element={<Beauty />} />
          <Route path="category/fragrances" element={<Fragrances />} />
          <Route path="category/furnitures" element={<Furnitures />} />
          <Route path="category/laptops" element={<Laptops />} />
          <Route path="category/smartphones" element={<Smartphones />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
