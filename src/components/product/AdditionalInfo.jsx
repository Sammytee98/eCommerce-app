import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const AdditionalInfo = () => {
  // Pull openSection(name of section), waranty, weight, toggleSection handler from context
  const { openSection, warranty, weight, toggleSection } =
    useContext(ProductContext);

  return (
    <section className="border-2 w-full border-blue-300/30 px-3 py-4">
      <button
        onClick={() => toggleSection("information")}
        className="w-full flex text-lg tablet:text-xl hover:text-orange-600 transition items-center font-semibold justify-between cursor-pointer"
      >
        <span>ADDITIONAL INFORMATION</span>
        <span className="text-orange-600 text-xl tablet:text-2xl">
          {openSection === "information" ? "-" : "+"}
        </span>
      </button>

      {/* Display only if the current openSection === information */}
      {openSection === "information" && (
        <div className="p-5 text-base">
          <div className="flex w-full h-10 border-2 border-gray-200">
            <p className="w-1/3 flex justify-center items-center border-r-2 border-gray-200">
              Weight
            </p>
            <p className="w-2/3 flex justify-center items-center ">{weight}</p>
          </div>

          <div className="flex w-full h-10 border-2 border-gray-200">
            <p className="w-1/3 flex justify-center items-center border-r-2 border-gray-200">
              Warranty
            </p>
            <p className="w-2/3 flex justify-center items-center ">
              {warranty}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdditionalInfo;
