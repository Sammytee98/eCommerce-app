import Links from "./FooterLinks";
import Subscription from "./Subscription";
import Socials from "./Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-t-neutral-300 bg-neutral-100 p-3 max-small:flex max-small:flex-col max-small:items-center">
      <section className="grid grid-cols-1 max-small:max-w-2/3 laptop:grid-cols-2 p-3">
        <div className="space-y-1.5 mb-4">
          <h1 className="text-4xl font-oswald font-extrabold italic">GTS</h1>
          <p className=" font-open-sans text-lg">The best gadget store.</p>
        </div>
        <div className="space-y-4 flex  max-small:flex-col justify-around">
          <Links />
          <Subscription />
        </div>
      </section>

      <section className="flex flex-col mobile:flex-row justify-between laptop:justify-around max-mobile:items-center space-y-2 border-t-2 border-t-neutral-300 mt-4 py-4">
        <p className="font-open-sans text-base">
          Copyright &copy; {year} Gadget Store | Powered by GTS
        </p>
        <Socials />
      </section>
    </footer>
  );
};

export default Footer;
