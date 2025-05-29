import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// let category = [];

const shuffledArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// const fetchSelectedProducts = async () => {
//   const categoriesRes = await axios.get(
//     "https://fakestoreapi.com/products/categories"
//   );
//   const allCategories = categoriesRes.data;

//   // Determine category list to use
//   const filteredCategories = selectedCategory === "all" ? allCategories : [selectedCategory];

//   // Fetch products by the determined category
//   const fetches = filteredCategories.map((cat) =>
//     axios.get(`https:///fakestoreapi.com/products/category/${cat}`)
//   );
//   // const fetches = allCategories.map((cat) =>
//   //   axios.get(`https:///fakestoreapi.com/products/category/${cat}`)
//   // );

//   const responses = await Promise.all(fetches);

//   let allProducts = [];
//   responses.forEach((res) => {
//     allProducts = allProducts.concat(res.data);
//   });

//   // console.log(allProducts);
//   // Apply sorting
//   if(sortBy === "price-asc") {
//     allProducts.sort((a, b) => a.price - b.price)
//   } else if (sortBy === "price-desc") {
//     allProducts.sort((a, b) => b.price - a.price)
//   } else if(sortBy === "rating-desc") {
//     allProducts.sort((a, b) => a.rating.rate - b.rating.rate)
//   } else if (sortBy === "title-asc") {
//     allProducts.sort((a,b) => a.title.localeCompare(b.title))
//   }

//   // Shuffle the products
//   const shuffledProducts = shuffledArray(allProducts);

//   // Return the new shuffled data
//   return shuffledProducts;
// };

export const usePaginatedProducts = (page, selectedCategory, sortBy) => {
  const productsQuery = useQuery({
    queryKey: ["selectedProducts", page, selectedCategory, sortBy],
    queryFn: async () => {
      // Fetch all categories
      const categoriesRes = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const allCategories = categoriesRes.data;

      // Determine category list to use
      const filteredCategories =
        selectedCategory === "all" ? allCategories : [selectedCategory];

      // Fetch products by the determined category
      const fetches = filteredCategories.map((cat) =>
        axios.get(`https:///fakestoreapi.com/products/category/${cat}`)
      );

      const responses = await Promise.all(fetches);

      let allProducts = [];
      responses.forEach((res) => {
        allProducts = allProducts.concat(res.data);
      });

      // Apply sorting
      // if (sortBy === "price-asc") {
      //   allProducts.sort((a, b) => a.price - b.price);
      // } else if (sortBy === "price-desc") {
      //   allProducts.sort((a, b) => b.price - a.price);
      // } else if (sortBy === "rating-desc") {
      //   allProducts.sort((a, b) => a.rating.rate - b.rating.rate);
      // } else if (sortBy === "title-asc") {
      //   allProducts.sort((a, b) => a.title.localeCompare(b.title));
      // }

      // Shuffle the products
      const shuffledProducts = shuffledArray(allProducts);

      // Return the new shuffled data
      return shuffledProducts;
    },
    select: (products) => {
      // Sort products bfore slicing
      const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return a.rating.rate - b.rating.rate;
        if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      });

      const limit = 10;
      const skip = (page - 1) * limit;
      const paginatedProducts = sortedProducts.slice(skip, skip + limit);

      return {
        products: paginatedProducts,
        total: sortedProducts.length,
      };
    },
    keepPreviousData: true, // Mandatory for smooth pagination
  });

  return productsQuery;
};

// const { data, isLoading, isError } = useQuery({
//     queryKey: ["posts", currentPage],
//     queryFn: fetchPosts,
//     keepPreviousData: true, });
