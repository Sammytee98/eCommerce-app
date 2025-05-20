import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <ScrollToTop />
      <main className="min-h-svh w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
