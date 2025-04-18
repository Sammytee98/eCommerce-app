import { Routes, Route } from "react-router-dom";
import DataProvider from "./contexts/DataContext";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
