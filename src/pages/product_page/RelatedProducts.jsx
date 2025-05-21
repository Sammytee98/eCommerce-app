import { useContext, useCallback } from "react";
import ProductContext from "../../contexts/ProductContext";
import useRelatedProduct from "../../hooks/useRelatedProducts";
import ProductCard from "../../components/ui/ProductCard";

const RelatedProducts = () => {
  const { cat, productId, setNotificationOpen } = useContext(ProductContext);
  const { data: related = [], isLoading } = useRelatedProduct(cat, productId);

  const handleClick = useCallback(() => setNotificationOpen(false), []);

  return (
    <section className="w-full h-auto mt-10 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <h3 className="text-2xl tablet:text-3xl font-extrabold">
          RELATED PRODUCTS
        </h3>
        <hr className="w-12 border-1 border-orange-500 rounded-md" />
      </div>

      <div className="grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-x-10 gap-y-7 p-2 my-10">
        {isLoading && <p className="text-center col-span-full">Loading...</p>}

        {!isLoading && !related.length && (
          <p className="text-center col-span-full">No products available</p>
        )}

        {related &&
          !isLoading &&
          related.map((product) => {
            const { id, rating, image, price, title, category } = product;

            return (
              <ProductCard
                key={id}
                id={id}
                rating={rating}
                thumbnail={image}
                price={price}
                title={title}
                category={category}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </section>
  );
};

export default RelatedProducts;
