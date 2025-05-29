const Sort = ({ sortBy, handleSorting }) => {
  return (
    <>
      <select
        value={sortBy}
        onChange={handleSorting}
        className="text-sm border-2 border-gray-700 rounded-md px-3 py-1 cursor-pointer"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating</option>
        <option value="title-asc">Title (A-Z)</option>
      </select>
    </>
  );
};

export default Sort;
