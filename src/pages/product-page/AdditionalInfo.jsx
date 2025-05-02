import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const AdditionalInfo = () => {
  const { openSection, warranty, weight, toggleSection } =
    useContext(ProductContext);

  return (
    <section className="border-2 w-full border-blue-300/30 px-3 py-4">
      <button
        onClick={() => toggleSection("information")}
        className="w-full flex text-2xl hover:text-blue-300/70 transition items-center font-semibold justify-between cursor-pointer"
      >
        <span>ADDITIONAL INFORMATION</span>
        <span className="text-blue-300/70 text-4xl">
          {openSection === "information" ? "-" : "+"}
        </span>
      </button>

      {openSection === "information" && (
        <div className="p-5">
          <div className="flex w-full text-lg h-10 border-2 border-blue-300/30">
            <p className="w-1/3 flex justify-center items-center border-r-2 border-blue-300/30">
              Weight
            </p>
            <p className="w-2/3 flex justify-center items-center ">{weight}</p>
          </div>

          <div className="flex w-full text-lg h-10 border-2 border-blue-300/30">
            <p className="w-1/3 flex justify-center items-center border-r-2 border-blue-300/30">
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
