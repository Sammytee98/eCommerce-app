import HeroSection from "../components/home/HeroSection";
import LogoSwiper from "../components/home/LogoSwiper";
import ShopByCategory from "../components/home/ShopByCategory";
import TrendingProducts from "../components/home/TrendingProducts";
import GeneralReviews from "../components/home/GeneralReviews";
import ServiceAdvantages from "../components/home/ServiceAdvantages";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full mb-10"
    >
      <HeroSection />
      <LogoSwiper />
      <ShopByCategory />
      <TrendingProducts />
      <GeneralReviews />
      <ServiceAdvantages />
    </motion.main>
  );
};

export default Home;
