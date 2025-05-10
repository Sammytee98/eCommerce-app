import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRelatedProducts = async (category, currentId) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const productsData = res.data;

  const related = productsData.filter((p) => p.id !== currentId);
  return related;
};

const useRelatedProduct = (category, currentId) => {
  return useQuery({
    queryKey: ["related-products", category],
    queryFn: () => fetchRelatedProducts(category, currentId),
    enabled: !!category && !!currentId,
  });
};

export default useRelatedProduct;
