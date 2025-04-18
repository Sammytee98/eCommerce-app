import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const Home = () => {
  const { products, fetchErr, isLoading } = useContext(DataContext);

  return <main>This is the main body</main>;
};

export default Home;
