import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import RatingStar from "./RatingStar";

const ProductCard = ({ id, thumbnail, title, rating, price }) => {
  const navigate = useNavigate();

  // function to handle products navigation to see more description about product
  const handleNavigate = useCallback(
    (productId) => {
      navigate(`/products/${productId}`);
    },
    [navigate]
  );

  return (
    <motion.figure
      onClick={() => handleNavigate(id)}
      whileHover={{
        scale: 1.03,
        backgroundColor: "rgba(147, 197, 253, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-52 min-h-76 relative bg-blue-300/10 rounded-md  cursor-pointer overflow-hidden"
    >
      <p className="absolute left-2 top-3 z-10 bg-white text-blue-300/70 rounded-3xl px-2 py-0.5 text-sm">
        Sale!
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
          <span className="font-semibold">$ {(price * 0.8).toFixed(2)}</span>
          <span className="line-through">$ {price}</span>
        </p>
      </figcaption>
    </motion.figure>
  );
};

export default ProductCard;
