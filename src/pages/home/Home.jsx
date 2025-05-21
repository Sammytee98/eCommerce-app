import HeroSection from "./HeroSection";
import LogoSwiper from "./LogoSwiper";
import ShopByCategory from "./ShopByCategory";
import TrendingProducts from "./TrendingProducts";
import GeneralReviews from "./GeneralReviews";
import ServiceAdvantages from "./ServiceAdvantages";

const Home = () => {
  return (
    <main className="w-full h-full mb-10">
      <HeroSection />
      <LogoSwiper />
      <ShopByCategory />
      <TrendingProducts />
      <GeneralReviews />
      <ServiceAdvantages />
    </main>
  );
};

export default Home;
