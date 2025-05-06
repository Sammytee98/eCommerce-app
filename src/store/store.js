import axios from "axios";
import { createStore, action, thunk, computed } from "easy-peasy";

const store = createStore({
  // ====================
  // PRODUCT STATE & ACTIONS
  // ====================
  allProducts: [], // All products fetched
  trendingProducts: [], // Random selection of trending products
  categoryProducts: {}, // Products grouped by category

  // Setters

  setAllProducts: action((state, payload) => {
    state.allProducts = payload;
  }),
  setTrendingProducts: action((state, payload) => {
    state.trendingProducts = payload;
  }),
  setCategoryProduct: action((state, { category, products }) => {
    state.categoryProducts[category] = products;
  }),

  // Fetch product by category and populate store
  fetchCategoryProducts: thunk(async (actions) => {
    const categories = [
      "furniture",
      "beauty",
      "fragrances",
      "laptops",
      "smartphones",
    ];
    let mergedProducts = [];

    try {
      const fetches = categories.map((cat) =>
        axios.get(`https://dummyjson.com/products/category/${cat}`)
      );
      const responses = await Promise.all(fetches);
      responses.forEach((res, index) => {
        const category = categories[index];
        const products = res.data.products;

        actions.setCategoryProduct({ category, products });
        mergedProducts = mergedProducts.concat(products);
      });

      // Shuffle and set trending + all products
      const shuffled = [...mergedProducts].sort(() => 0.5 - Math.random());
      actions.setAllProducts(shuffled);
      const trending = shuffled.slice(0, 9);
      actions.setTrendingProducts(trending);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }),

  // ====================
  // CART STATE & ACTIONS
  // ====================
  cartItems: [], // Array of items in the cart
  // totalQuantity: 0, // Total item quantity in the cart

  addToCart: action((state, product) => {
    const existing = state.cartItems.find((item) => item.id === product.id);

    if (existing) {
      // If product already exist in the cart, update its quantity
      existing.quantity += product.quantity;
    } else {
      // Add new product to cart
      state.cartItems.push({ ...product });
    }

    // Recalculating total quantity after adding to cart
    // state.totalQuantity = state.cartItems.reduce(
    //   (sum, item) => sum + item.quantity,
    //   0
    // );
  }),

  removeFromCart: action((state, productId) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== productId);

    // Recalculate total quantity after removal
    // state.totalQuantity = state.cartItems.reduce(
    // (sum, item) => sum + item.quantity,
    // 0
    // );
  }),

  // Computed value to get total quantity
  totalQuantity: computed((state) => {
    return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }),
});

export default store;
