import axios from "axios";
import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  categoryProducts: {}, // dynamic category-based storage
  trendingProducts: [], // store trending products

  // Set product for one category
  setCategoryProduct: action((state, { category, products }) => {
    state.categoryProducts[category] = products;
  }),

  // Set trending products
  setTrendingProducts: action((state, payload) => {
    state.trendingProducts = payload;
  }),

  // Thunk to fetch all selected cateegories
  fetchCategoryProducts: thunk(async (actions) => {
    const categories = [
      "furniture",
      "beauty",
      "fragrances",
      "laptops",
      "smartphones",
    ];

    try {
      const fetches = categories.map((cat) =>
        axios.get(`https://dummyjson.com/products/category/${cat}`)
      );
      const responses = await Promise.all(fetches);
      responses.forEach((res, index) => {
        const category = categories[index];
        const products = res.data.products;

        actions.setCategoryProduct({ category, products }); // Get category products
      });

      // Set trending products
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      const trending = shuffled.slice(0, 9);
      actions.setTrendingProducts(trending);
    } catch (err) {
      actions.setisLoading(false);
      actions.setFetchError(`Error: ${err}`);
    }
  }),
});

export default store;
