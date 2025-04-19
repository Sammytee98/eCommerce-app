import { Routes, Route } from "react-router-dom";
import DataProvider from "./contexts/DataContext";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ShopAll />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<ProductCard />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
