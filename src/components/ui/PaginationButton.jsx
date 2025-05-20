import { motion } from "motion/react";
import { useCallback } from "react";

const PaginationButton = ({ page, setPage, totalPages, pageNumbers }) => {
  const handlePreviousPageClick = useCallback(
    () => setPage((old) => Math.max(old - 1, 1)),
    []
  );

  const prevAndNextStyle =
    "px-2 py-1 text-xs flex items-center space-x-2 font-normal bg-gray-100 hover:bg-gray-200 transition rounded-md disabled:invisible cursor-pointer";

  const handleNextPageClick = useCallback(() => {
    setPage((old) => Math.min(old + 1, totalPages));
  }, []);

  return (
    <div className="p-2 mb-5 flex justify-center items-center space-x-5">
      <motion.button
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        type="button"
        disabled={page === 1}
        onClick={handlePreviousPageClick}
        className={prevAndNextStyle}
      >
        <span>&lt;&lt;</span>
        <span>Prev</span>
      </motion.button>
      <div className="space-x-3">
        {pageNumbers.map((pg, i) => (
          <button
            type="button"
            key={i + 1}
            onClick={() => setPage(pg)}
            className={`px-2 py-0.5 text-xs rounded-full cursor-pointer hover:bg-gray-300 transition ${
              page === pg ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {pg}
          </button>
        ))}
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        type="button"
        disabled={page === totalPages}
        onClick={handleNextPageClick}
        className={prevAndNextStyle}
      >
        <span>Next</span>
        <span>&gt;&gt;</span>
      </motion.button>
    </div>
  );
};

export default PaginationButton;
