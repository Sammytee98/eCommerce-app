import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRelatedProducts = async (category, currentId) => {
  const res = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  const productsData = res.data.products;
  const related = productsData.filter((p) => p.id !== currentId);
  return related.sort(() => 0.5 - Math.random()).slice(0, 4);
};

const useRelatedProduct = (category, currentId) => {
  return useQuery({
    queryKey: ["related-products", category],
    queryFn: () => fetchRelatedProducts(category, currentId),
    enabled: !!category && !!currentId,
  });
};

export default useRelatedProduct;
