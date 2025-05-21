import HeroSection from "../components/home/HeroSection";
import LogoSwiper from "../components/home/LogoSwiper";
import ShopByCategory from "../components/home/ShopByCategory";
import TrendingProducts from "../components/home/TrendingProducts";
import GeneralReviews from "../components/home/GeneralReviews";
import ServiceAdvantages from "../components/home/ServiceAdvantages";

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
