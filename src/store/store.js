import axios from "axios";
import { createStore, action, thunk, computed } from "easy-peasy";
import { setLocalStorage, getLocalStorage } from "../hooks/localStorage";

// get intial items using their key in local storage
const getInitialItems = (key) => {
  try {
    const items = getLocalStorage(key);
    return items ? items : [];
  } catch (error) {
    console.error(`Error reading ${key} from localStorage`, error);
    return [];
  }
};

const store = createStore({
  // ====================
  // PRODUCT STATE & ACTIONS
  // ====================
  products: [], // All products fetched
  trendingProducts: [], // Random selection of trending products
  categoryProducts: {}, // Products grouped by category
  customerAddress: {}, // Customer billing and shipping address
  customerCC: {}, // Customer card details
  userPaymentMethod: null, // User payment method

  // Setters

  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  setTrendingProducts: action((state, payload) => {
    state.trendingProducts = payload;
  }),
  setCategoryProduct: action((state, { category, products }) => {
    state.categoryProducts[category] = products;
  }),
  setCustomerAddress: action((state, payload) => {
    state.customerAddress = payload;
  }),
  setCustomerCC: action((state, payload) => {
    state.customerCC = payload;
  }),
  setUserPaymentMethod: action((state, payload) => {
    state.userPaymentMethod = payload;
  }),

  // Fetch product by category and populate store
  fetchCategoryProducts: thunk(async (actions) => {
    let categories = [];

    try {
      // Fetch category lists
      const fetchCategories = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      categories = fetchCategories.data;

      // Fetch all products
      const productsRes = await axios.get("https://fakestoreapi.com/products");
      const allProducts = productsRes.data;
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      actions.setProducts(shuffled);
      const trending = shuffled.slice(0, 9);
      actions.setTrendingProducts(trending);

      const fetches = categories.map((cat) =>
        axios.get(`https://fakestoreapi.com/products/category/${cat}`)
      );
      const responses = await Promise.all(fetches);
      responses.forEach((res, index) => {
        const category = categories[index];
        const products = res.data;

        actions.setCategoryProduct({ category, products });
      });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }),

  // ====================
  // CART STATE & ACTIONS
  // ====================
  cartItems: getInitialItems("cart"), // Array of items in the cart
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

    setLocalStorage("cart", state.cartItems);
  }),

  // Action to clear cart items
  clearCartItems: action((state) => {
    state.cartItems = [];
    state.totalQuantity = 0;

    // Save cartItems new state in local storage
    setLocalStorage("cart", state.cartItems);
  }),

  // Action to update cart items
  updateCartItem: action((state, { id, action }) => {
    const item = state.cartItems.find((prod) => prod.id === id);
    if (action === "increase") {
      item.quantity = item.quantity + 1;
    } else if (action === "decrease") {
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== id
        );
      }
    }

    // Save cartItems new state in local storage
    setLocalStorage("cart", state.cartItems);
  }),

  // Action o remove a product from cart
  removeFromCart: action((state, productId) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== productId);

    // Save cartItems new state in local storage
    setLocalStorage("cart", state.cartItems);
  }),

  // Computed value to get total quantity
  totalQuantity: computed((state) => {
    return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }),

  // ====================
  // TOTAL PAID STATE & ACION
  // ====================
  totalPaid: 0,

  setTotalPaid: action((state, total) => {
    state.totalPaid = state.totalPaid = total;
  }),

  // ====================
  // WISHLIST STATE & ACTIONS
  // ====================
  wishlistItems: getInitialItems("wishlist"), // Array of items in the wishlist

  // Action to add product to wishlist
  addToWishlist: action((state, product) => {
    const existing = state.wishlistItems.find((item) => item.id === product.id);

    if (existing) {
      return;
    } else {
      // Add new product to cart
      state.wishlistItems.push({ ...product });
    }

    // Save wishlistItems new state in local storage
    setLocalStorage("wishlist", state.wishlistItems);
  }),

  // Action to remove product from wishlist
  removeFromWishlist: action((state, productId) => {
    state.wishlistItems = state.wishlistItems.filter(
      (item) => item.id !== productId
    );

    // Save wishlistItems new state in local storage
    setLocalStorage("wishlist", state.wishlistItems);
  }),
});

export default store;
