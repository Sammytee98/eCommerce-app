import { useEffect, useState } from "react";
import { usePaginatedProducts } from "../hooks/usePaginatedProducts";
import ProductCard from "../components/ui/ProductCard";
import PaginationButton from "../components/ui/PaginationButton";
import BreadCrumb from "../components/layouts/BreadCrumb";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Filter from "../components/allProducts/Filter";
import Sort from "../components/allProducts/Sort";
import SEO from "../components/utils/SEO";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const { data, error, isFetching } = usePaginatedProducts(
    page,
    selectedCategory,
    sortBy
  );

  const totalProducts = data?.total || 0;
  const productsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
    setPage(1);
  };

  const handleSorting = (e) => {
    setSortBy(e.target.value);
    setPage(1);
  };

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
      <SEO
        title="Shop All Products | Gadget Store"
        description="Browse all our premium tech, fashion, and lifestyle products in one place. Find your perfect item today."
        keywords="shop all, tech store, all products, online store, latest gadgets, best products"
        canonical="https://gtstore-nu.vercel.app/products"
        image="../assets/all_products_ss.jpeg"
      />

      <BreadCrumb />
      <div className="w-full space-y-5 mb-8 grid grid-cols-2 mobile:grid-cols-3 gap-4 mobile:gap-8">
        <h2 className=" not-mobile:col-span-2 text-4xl tablet:text-5xl">
          SHOP ALL
        </h2>

        {/* Filtering */}
        <Filter
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />

        {/* Sorting */}
        <Sort sortBy={sortBy} handleSorting={handleSorting} />
        <div className="col-span-full"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className=" grid justify-items-center grid-cols-2 mobile:grid-cols-3 laptop:grid-cols-4 gap-y-7 gap-x-8"
      >
        {/* Display loading when fetching products */}
        {isFetching && (
          <div className="col-span-full text-2xl flex space-x-2 justify-center items-center mt-10">
            <LoadingSpinner size={35} />
            <p>fetching...</p>
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

export default AllProducts;
