import customerReviews from "../../data/GeneralReviewsData";
import RatingStar from "../ui/RatingStar";
import { motion } from "motion/react";

const GeneralReviews = () => {
  return (
    <article className="w-full my-8 font-oswald">
      <h3 className="text-center text-2xl tablet:text-3xl font-semibold">
        WHAT CUSTOMERS ARE SAYING
      </h3>

      <section className="px-2.5 py-7 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-x-5 gap-y-7 mt-5">
        {customerReviews.map((review) => {
          const { id, name, review: rev, rating } = review;

          return (
            <motion.div
              whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
              transition={{ duration: 0.3 }}
              key={id}
              className="space-y-4 bg-gray-50 rounded-md px-5 py-10 flex flex-col items-center"
            >
              <RatingStar rating={rating} />
              <p className="text-sm tablet:text-base text-center font-normal italic">
                {rev}
              </p>
              <p className="text-xs tablet:text-sm text-gray-500">{name}</p>
            </motion.div>
          );
        })}
      </section>
    </article>
  );
};

export default GeneralReviews;
