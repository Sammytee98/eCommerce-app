import { useStoreState } from "easy-peasy";
import { motion } from "motion/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TrendingProducts = () => {
  const navigate = useNavigate();
  const trendingProducts = useStoreState((state) => state.trendingProducts);

  const handleNavigate = useCallback(
    (productId) => {
      navigate(`product/${productId}`);
    },
    [navigate]
  );

  return (
    <section className="w-full h-auto mt-5 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-blue-300/70 text-[12px]">SHOP BY CATEGORY</p>
        <h3 className="text-xl font-extrabold">Trending Products</h3>
        <hr className="w-16 border-1 rounded-md text-blue-300/70" />
      </div>

      <div className="grid justify-items-center grid-cols-1 small:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-5 my-10">
        {trendingProducts.map((product) => {
          const { id, thumbnail, price, title } = product;

          return (
            <motion.figure
              onClick={() => handleNavigate(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={id}
              className="w-44 h-68 relative bg-blue-300/20 rounded-md  cursor-pointer overflow-hidden"
            >
              <p className="absolute left-2 top-3 z-50 bg-white rounded-3xl px-2 py-0.5 text-sm">
                Sale!
              </p>
              <img src={thumbnail} alt={title} className="w-full h-3/6" />
              <figcaption className="absolute bottom-0 left-0 right-0 top-3/6 space-y-2 p-3 flex flex-col ">
                <p className="text-xl">{title}</p>
                <p className="text-sm text-black/70">
                  {`$${(price * 0.8).toFixed(2)} - $${price}`}
                </p>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingProducts;
