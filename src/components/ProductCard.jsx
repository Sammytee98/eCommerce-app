import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import RatingStar from "./RatingStar";

const ProductCard = ({
  id,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage,
  category,
}) => {
  const navigate = useNavigate();

  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  // function to handle products navigation to see more description about product
  const handleNavigate = useCallback(
    (cat, productId) => {
      navigate(`/products/${cat}/${productId}`);
    },
    [navigate]
  );

  return (
    <motion.figure
      onClick={() => handleNavigate(category, id)}
      whileHover={{
        scale: 1.03,
        backgroundColor: "rgba(147, 197, 253, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-36 tablet:w-52 min-h-76 relative bg-blue-300/10 rounded-md  cursor-pointer overflow-hidden"
    >
      <p className="absolute right-2 top-3 z-10 bg-white text-blue-300/70 rounded-md px-1 py-0.5 text-xs">
        -{discountPercentage}%
      </p>
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="w-full h-3/6 p-1 object-fill"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 top-3/6 space-y-2 p-3 flex flex-col bg-white">
        <p className="text-xl">{title}</p>
        <RatingStar rating={rating} />
        <p className="text-base flex flex-col text-neutral-800">
          <span className="font-semibold">$ {discountPrice}</span>
          <span className="line-through">$ {price}</span>
        </p>
      </figcaption>
    </motion.figure>
  );
};

export default ProductCard;
