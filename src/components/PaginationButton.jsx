import { motion } from "motion/react";
import { useCallback } from "react";

const PaginationButton = ({ page, setPage, totalPages, pageNumbers }) => {
  const handlePreviousPageClick = useCallback(
    () => setPage((old) => Math.max(old - 1, 1)),
    []
  );

  const handleNextPageClick = useCallback(() => {
    setPage((old) => Math.min(old + 1, totalPages));
  }, []);

  return (
    <div className="p-2 mb-5 flex justify-center items-center space-x-10">
      <motion.button
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        type="button"
        disabled={page === 1}
        onClick={handlePreviousPageClick}
        className="px-3 py-1 text-lg font-semibold bg-neutral-200 hover:bg-neutral-300 transition rounded-md disabled:opacity-30 cursor-pointer"
      >
        &lt;&lt;
      </motion.button>
      <div className="space-x-4">
        {pageNumbers.map((pg, i) => (
          <button
            type="button"
            key={i + 1}
            onClick={() => setPage(pg)}
            className={`px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-blue-300/30 transition ${
              page === pg ? "bg-blue-300/50" : "bg-blue-300/15"
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
        className="px-3 py-1 flex items-center text-lg font-semibold bg-neutral-200 hover:bg-neutral-300 transition rounded-md disabled:opacity-30 cursor-pointer"
      >
        &gt;&gt;
      </motion.button>
    </div>
  );
};

export default PaginationButton;
