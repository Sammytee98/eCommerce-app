import { useEffect, useState } from "react";
import { usePaginatedProducts } from "../hooks/usePaginatedProducts";
import ProductCard from "../components/ui/ProductCard";
import PaginationButton from "../components/ui/PaginationButton";
import BreadCrumb from "../components/ui/BreadCrumb";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ShopAll = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = usePaginatedProducts(page);

  const totalProducts = data?.total || 0;
  const productsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1.05,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col font-oswald px-5 py-10"
    >
      <div className="">
        <BreadCrumb />

        <h2 className="mt-8 mb-10 text-3xl tablet:text-4xl">SHOP ALL</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className=" grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-y-7 gap-x-10"
      >
        {/* Display loading when fetching products */}
        {isFetching && (
          <div className="col-span-full text-3xl flex space-x-2 justify-center items-center mt-10">
            <LoadingSpinner size={35} />
            <p>Fetching...</p>
          </div>
        )}

        {/* Display error message if failed to fetch products */}
        {error && (
          <p className="col-span-2 text-red-600 text-3xl text-center mt-10">
            Error fetching products: {error.message}
          </p>
        )}

        {/* Display all products only if the products are available*/}
        {!isFetching &&
          !error &&
          data.products &&
          data?.products.map((product) => {
            const { id, rating, image, title, price, category } = product;

            return (
              <ProductCard
                key={id}
                id={id}
                thumbnail={image}
                rating={rating}
                title={title}
                price={price}
                category={category}
              />
            );
          })}
      </motion.div>

      {/* Pagination Button bar */}
      <div className="mt-5">
        {!isFetching && data?.products && (
          <PaginationButton
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
          />
        )}
      </div>
    </motion.main>
  );
};

export default ShopAll;
