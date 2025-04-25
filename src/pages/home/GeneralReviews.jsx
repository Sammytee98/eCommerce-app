import customerReviews from "../../data/GeneralReviewsData";
import RatingStar from "../../components/RatingStar";
import { motion } from "motion/react";

const GeneralReviews = () => {
  return (
    <article className="w-full my-8 font-oswald">
      <h3 className="text-center text-2xl">What Customer Are Saying</h3>

      <section className="px-2.5 py-7 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-4">
        {customerReviews.map((review) => {
          const { id, name, review: rev, image, rating } = review;

          return (
            <motion.div
              whileHover={{ backgroundColor: "rgba(147, 197, 253, 0.3)" }}
              transition={{ duration: 0.3 }}
              key={id}
              className="space-y-2.5 bg-blue-300/20 rounded-md p-5"
            >
              <RatingStar rating={rating} />
              <p className="text-base">{rev}</p>
              <div className="flex space-x-2.5 items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{name}</span>
              </div>
            </motion.div>
          );
        })}
      </section>
    </article>
  );
};

export default GeneralReviews;
