import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <DataProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </DataProvider>
    </>
  );
};

export default App;
