import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <main className="w-full h-full mb-10">
      <HeroSection />
      <ProductCategories />
      <TrendingProducts />
    </main>
  );
};

export default Home;
