const Filter = ({ selectedCategory, handleCategorySelect }) => {
  return (
    <>
      <select
        value={selectedCategory}
        onChange={handleCategorySelect}
        className="text-sm border-2 border-gray-700 rounded-md px-3 py-1 cursor-pointer"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </>
  );
};

export default Filter;
