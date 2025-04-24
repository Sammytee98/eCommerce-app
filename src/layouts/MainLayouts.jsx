import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className="min-h-svh w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
