import { useStoreState } from "easy-peasy";
import HeroSection from "./HeroSection";

const Home = () => {
  const trendingProducts = useStoreState((state) => state.trendingProducts);

  return (
    <main className="w-full h-full">
      <HeroSection />
    </main>
  );
};

export default Home;
