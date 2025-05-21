import { useContext } from "react";
import RatingStar from "../../components/ui/RatingStar";
import ProductContext from "../../contexts/ProductContext";

const Review = () => {
  const { reviews, openSection, toggleSection } = useContext(ProductContext);

  return (
    <section className="border-2 w-full border-gray-200 px-3 py-4">
      <button
        onClick={() => toggleSection("review")}
        className="w-full flex text-lg tablet:text-xl hover:text-orange-600 transition items-center font-semibold justify-between cursor-pointer"
      >
        <span>{`REVIEW (${reviews.length})`}</span>
        <span className="text-orange-600 text-xl tablet:text-2xl">
          {openSection === "review" ? "-" : "+"}
        </span>
      </button>

      {openSection === "review" && (
        <div className="p-5">
          <div>
            <h3 className="text-base tablet:text-lg font-medium">REVIEWS</h3>
            <div className="my-4 w-full space-y-2.5">
              {reviews.map((review, i) => {
                const { rating, date, comment, reviewerName: name } = review;

                return (
                  <div
                    key={i + 1}
                    className="w-full h-auto space-y-2 bg-gray-50 p-2 rounded-md"
                  >
                    <div className="flex justify-between items-center">
                      <RatingStar rating={rating} />
                      <p className="text-xs tablet:text-sm">
                        {date.slice(0, 10)}
                      </p>
                    </div>

                    <p className="text-sm tablet:text-base font-normal italic tracking-wide">
                      {comment}
                    </p>
                    <p className="text-xs tablet:text-sm text-gray-700">
                      by {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Review;
