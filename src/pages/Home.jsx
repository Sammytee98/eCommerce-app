import { useStoreState } from "easy-peasy";
import { useMemo } from "react";

const Home = () => {
  const trendingProducts = useStoreState((state) => state.trendingProducts);

  return (
    <main>
      <h2 className="font-oswald text-2xl">Home Page</h2>
      <ul>
        {trendingProducts.map((product) => (
          <li key={product.id}>
            {product.brand}
            <img
              src={product.thumbnail}
              alt={product.brand}
              width="100"
              height="100"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
