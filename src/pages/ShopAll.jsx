import { useEffect, useState } from "react";
import { usePaginatedProducts } from "../hooks/usePaginatedProducts";
import ProductCard from "../components/ProductCard";
import PaginationButton from "../components/PaginationButton";
import BreadCrumb from "../components/BreadCrumb";

const ShopAll = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = usePaginatedProducts(page);

  // const products = data?.products;
  const totalProducts = data?.total || 0;
  const productsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <main className="flex flex-col font-oswald px-5 py-10">
      <div className="">
        <BreadCrumb />

        <h2 className="mt-8 mb-10 text-3xl tablet:text-4xl">SHOP ALL</h2>
      </div>

      <div className=" grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-y-7 gap-x-10">
        {/* Display loading when fetching products */}
        {isFetching && (
          <p className="col-span-full text-3xl text-center mt-10">Loading...</p>
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
      </div>

      {/* Pagination Button bar */}
      {!isFetching && data?.products && (
        <PaginationButton
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        />
      )}
    </main>
  );
};

export default ShopAll;
