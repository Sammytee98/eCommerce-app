import { memo } from "react";
import QuickLinks from "./QuickLinks";
import Subscription from "./Subscription";
import Categories from "./CategoriesLink";
import Contact from "./Contact";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full font-oswald bg-blue-300/10 max-small:flex max-small:flex-col max-small:items-center space-y-5">
      <section className="w-full p-5 flex flex-col space-y-6">
        <div className="space-y-1.5">
          <img
            src="../../public/favicon.png"
            alt="gts logo"
            className="w-24 h-14"
          />
          <p className="text-base italic">The best gadget store.</p>
        </div>
        <div className="flex gap-8 flex-wrap justify-evenly">
          <QuickLinks />
          <section className="space-y-2 px-5">
            <h2 className="text-xl font-semibold text-center">CATEGORIES</h2>
            <Categories />
          </section>
          <Contact />
          <Subscription />
        </div>
      </section>

      <p className=" text-center text-base font-oswald text-neutral-600 border-t-2 border-neutral-300 py-4">
        Copyright &copy; {year} Gadget Store | Powered by GTS
      </p>
    </footer>
  );
};

export default memo(Footer);
