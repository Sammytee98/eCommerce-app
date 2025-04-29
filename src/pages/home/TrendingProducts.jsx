import { useStoreState } from "easy-peasy";
import ProductCard from "../../components/ProductCard";

const TrendingProducts = () => {
  const trendingProducts = useStoreState((state) => state.trendingProducts);

  return (
    <section className="w-full h-auto mt-5 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-blue-300/70 text-base">SHOP BY CATEGORY</p>
        <h3 className="text-3xl font-extrabold">TRENDING PRODUCTS</h3>
        <hr className="w-16 border-1 rounded-md text-blue-300/70" />
      </div>

      <div className="grid justify-items-center grid-cols-1 small:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-5 gap-y-7 my-10">
        {trendingProducts.map((product) => {
          const { id, rating, thumbnail, price, title } = product;

          return (
            <ProductCard
              key={id}
              id={id}
              rating={rating}
              thumbnail={thumbnail}
              title={title}
              price={price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrendingProducts;
