import { memo } from "react";
import QuickLinks from "../QuickLinks";
import Subscription from "../ui/Subscription";
import Categories from "../CategoriesLink";
import Contact from "../Contact";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full font-oswald bg-gray-100 border-t-gray-100 space-y-5">
      <section className="w-full p-5 flex flex-col space-y-6">
        <div className="space-y-1.5">
          <img
            src="../../public/favicon.svg"
            alt="gts logo"
            className="rounded-md"
            loading="lazy"
          />
          <p className="text-xs italic">THE BEST STORE.</p>
        </div>
        <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 space-y-5">
          <QuickLinks />
          <section className="space-y-2 px-3">
            <h2 className="text-lg tablet:text-xl font-medium text-center">
              CATEGORIES
            </h2>
            <Categories />
          </section>
          <Contact />
          <Subscription />
        </div>
      </section>

      <p className="text-center text-sm font-oswald text-gray-500 border-t-2 border-gray-200 py-4">
        Copyright &copy; {year} Gadget Store | Powered by GTS
      </p>
    </footer>
  );
};

export default memo(Footer);
