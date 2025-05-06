import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import useRelatedProduct from "../../hooks/useRelatedProducts";
import ProductCard from "../../components/ProductCard";

const RelatedProducts = () => {
  const { category, productId } = useContext(ProductContext);
  const { data: related = [], isLoading } = useRelatedProduct(
    category,
    productId
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="w-full h-auto mt-10 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <h3 className="text-3xl font-extrabold">RELATED PRODUCTS</h3>
        <hr className="w-16 border-1 rounded-md text-blue-300/70" />
      </div>

      <div className="grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-x-10 gap-y-7 p-2 my-10">
        {related.map((product) => {
          const {
            id,
            rating,
            thumbnail,
            price,
            discountPercentage,
            title,
            category,
          } = product;

          return (
            <ProductCard
              key={id}
              id={id}
              rating={rating}
              thumbnail={thumbnail}
              price={price}
              discountPercentage={discountPercentage}
              title={title}
              category={category}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
