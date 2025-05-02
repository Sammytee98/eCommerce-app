import { useContext } from "react";
import RatingStar from "../../components/RatingStar";
import ProductContext from "../../contexts/ProductContext";

const Review = () => {
  const { reviews, openSection, toggleSection } = useContext(ProductContext);

  return (
    <section className="border-2 w-full border-blue-300/30 px-3 py-4">
      <button
        onClick={() => toggleSection("review")}
        className="w-full flex text-2xl hover:text-blue-300/70 transition items-center font-semibold justify-between cursor-pointer"
      >
        <span>{`REVIEW (${reviews.length})`}</span>
        <span className="text-blue-300/70 text-4xl">
          {openSection === "review" ? "-" : "+"}
        </span>
      </button>

      {openSection === "review" && (
        <div className="p-5">
          <div>
            <h3 className="text-xl font-medium">REVIEWS</h3>
            <div className="my-4 w-full space-y-2.5">
              {reviews.map((review, i) => {
                const { rating, date, comment, reviewerName: name } = review;

                return (
                  <div
                    key={i + 1}
                    className="w-full h-auto space-y-2 bg-blue-300/10 p-2 rounded-md"
                  >
                    <div className="flex justify-between items-center">
                      <RatingStar rating={rating} />
                      <p>{date.slice(0, 10)}</p>
                    </div>

                    <p>{comment}</p>
                    <p className="text-sm text-blue-300/70">by {name}</p>
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
