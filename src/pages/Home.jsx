import HeroSection from "../components/home/HeroSection";
import LogoSwiper from "../components/home/LogoSwiper";
import ShopByCategory from "../components/home/ShopByCategory";
import TrendingProducts from "../components/home/TrendingProducts";
import GeneralReviews from "../components/home/GeneralReviews";
import ServiceAdvantages from "../components/home/ServiceAdvantages";
import { motion } from "framer-motion";
import SEO from "../components/utils/SEO";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full mb-10"
    >
      <SEO
        title="Gadget Store | Premium Electronics, Accessories & More"
        description="Discover the latest electronics, fashion, and gadgets at Gadget Store. Fast sshipping, secure checkout, and unbeatable prices."
        keywords="gadget store, electronics, online shop, tech accessories, premium gadgets"
        canonical="https://gtstore-nu.vercel.app"
        image="../assets/homepage_ss.jpeg"
      />

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
