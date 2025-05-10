import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const categories = [
  "laptops",
  "smartphones",
  "furniture",
  "fragrances",
  "beauty",
];
let category = [];

const shuffledArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const fetchSelectedProducts = async () => {
  const fetchCategories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  category = fetchCategories.data;

  const fetches = category.map((cat) =>
    axios.get(`https:///fakestoreapi.com/products/category/${cat}`)
  );

  const responses = await Promise.all(fetches);

  let allProducts = [];
  responses.forEach((res) => {
    allProducts = allProducts.concat(res.data);
  });

  console.log(allProducts);

  // Shuffle the products
  const shuffledProducts = shuffledArray(allProducts);

  // Return the new shuffled data
  return shuffledProducts;
};

export const usePaginatedProducts = (page) => {
  const productsQuery = useQuery({
    queryKey: ["selectedProducts"],
    queryFn: fetchSelectedProducts,
    select: (products) => {
      const limit = 10;
      const skip = (page - 1) * limit;
      const paginatedProducts = products.slice(skip, skip + limit);

      return {
        products: paginatedProducts,
        total: products.length,
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
