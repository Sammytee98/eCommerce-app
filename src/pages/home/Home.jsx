import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import TrendingProducts from "./TrendingProducts";
import GeneralReviews from "./GeneralReviews";
import ServiceAdvantages from "./ServiceAdvantages";

const Home = () => {
  return (
    <main className="w-full h-full mb-10">
      <HeroSection />
      <ProductCategories />
      <TrendingProducts />
      <GeneralReviews />
      <ServiceAdvantages />
    </main>
  );
};

export default Home;
