import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/layouts/BreadCrumb";
import ProductCard from "../components/ui/ProductCard";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { category } = useParams();

  const products = useStoreState((state) => state.categoryProducts[category]);

  if (!products) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-500">No Products in the category</p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col font-oswald px-5 py-10"
    >
      <div className="ml-10">
        <BreadCrumb />

        <h1 className="mt-8 mb-10 text-3xl tablet:text-4xl tracking-wider">
          {category.toUpperCase()}
        </h1>
      </div>
      <div className=" grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-y-7 gap-x-10 my-10">
        {products.map((product) => {
          const { id, image, rating, title, price, category } = product;

          return (
            <ProductCard
              key={id}
              id={id}
              thumbnail={image}
              rating={rating}
              category={category}
              title={title}
              price={price}
            />
          );
        })}
      </div>
    </motion.main>
  );
};

export default CategoryPage;
