import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import RatingStar from "./RatingStar";
import Button from "./Button";

const ProductCard = ({
  id,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage = 3,
  category,
}) => {
  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  return (
    <motion.figure className="w-36 tablet:w-48 min-h-72 flex flex-col rounded-md  cursor-pointer overflow-hidden ">
      <div className="relative w-full h-32 bg-gray-200">
        <p className="absolute right-2 top-3 z-10 bg-orange-100 text-orange-500 px-1 py-[1px] text-[12px] rounded-xs">
          -{discountPercentage}%
        </p>
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full p-1 object-fill"
        />
      </div>
      <figcaption className="space-y-2 grow p-3  flex flex-col bg-white">
        <RatingStar rating={rating.rate} />
        {/* <div className="grow space-y-3"> */}
        <p className="text-sm grow tablet:text-base">{`${title.slice(
          0,
          25
        )}...`}</p>
        <p className="text-base tablet:text-lg flex flex-col text-neutral-800 font-medium">
          $ {discountPrice}
        </p>
        {/* </div> */}
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link to={`/products/${category}/${id}`}>
            <Button children="SHOP NOW" dynamicStyle="w-full" />
          </Link>
        </motion.div>
      </figcaption>
    </motion.figure>
  );
};

export default ProductCard;
