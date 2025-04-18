import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { data, fetchErr, isLoading } = useAxiosFetch();

  useEffect(() => {
    setProducts(data);
  }, [data]);

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

export default DataContext;
