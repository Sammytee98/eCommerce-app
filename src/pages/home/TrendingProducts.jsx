import { useStoreState } from "easy-peasy";
import ProductCard from "../../components/ui/ProductCard";

const TrendingProducts = () => {
  const trendingProducts = useStoreState((state) => state.trendingProducts);

  return (
    <section className="w-full h-auto mt-5 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-orange-500 text-xs tablet:text-sm">
          SHOP BY CATEGORY
        </p>
        <h3 className="text-2xl tablet:text-3xl font-semibold">
          TRENDING PRODUCTS
        </h3>
        <hr className="w-12 border-1 rounded-md text-orange-500" />
      </div>

      <div className="grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-10 gap-y-7 p-2 my-10">
        {trendingProducts.map((product) => {
          const { id, rating, image, price, title, category } = product;

          return (
            <ProductCard
              key={id}
              id={id}
              rating={rating}
              thumbnail={image}
              title={title}
              price={price}
              category={category}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrendingProducts;
