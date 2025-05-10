import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const Description = () => {
  const { description, openSection, toggleSection } =
    useContext(ProductContext);

  return (
    <section className="border-2 w-full border-gray-200 px-3 py-4">
      <button
        onClick={() => toggleSection("description")}
        className="w-full flex text-lg tablet:text-xl hover:text-orange-600 transition items-center font-semibold justify-between cursor-pointer"
      >
        <span>DESCRIPTION</span>
        <span className="text-orange-600 text-xl tablet:text-2xl">
          {openSection === "description" ? "-" : "+"}
        </span>
      </button>

      {openSection === "description" && (
        <div className="space-y-4 px-2.5 py-5">
          <h3 className="font-medium text-sm tablet:text-base">
            A FEW WORDS ABOUT THE PRODUCT
          </h3>
          <hr className="w-14 border-1 border-gray-200" />
          <h4 className="text-sm tablet:text-base tracking-wide">
            {description}
          </h4>
          <p className="text-xs tablet:text-sm tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vehicula laoreet dolor, at posuere purus euismod quis. Mauris nibh
            nibh, hendrerit vitae mi vel, finibus feugiat ex. Ut interdum, neque
            ac fermentum tincidunt, est massa dignissim felis, non mattis sem
            elit at ante. Duis faucibus sed tortor quis vulputate. Sed lorem
            neque, venenatis pretium dolor non, suscipit malesuada arcu.
          </p>
        </div>
      )}
    </section>
  );
};

export default Description;
