import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const { data, fetchErr, isLoading } = useAxiosFetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const { products } = data;

  return (
    <DataContext.Provider
      value={{
        products,
        fetchErr,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
