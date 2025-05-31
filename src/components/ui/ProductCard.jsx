import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  handleClick,
}) => {
  const discountPrice = ((price * (100 - discountPercentage)) / 100).toFixed(2);

  const cardVariants = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.figure
      variants={cardVariants}
      whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-40 tablet:w-48 min-h-68 flex flex-col rounded-md  cursor-pointer overflow-hidden p-2"
    >
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
      <figcaption className="space-y-2 grow py-3  flex flex-col bg-white">
        <RatingStar rating={rating.rate} />
        <p className="grow text-base truncate max-w-full" title={title}>
          {title}
        </p>
        <p className="text-lg flex flex-col text-neutral-800 font-medium">
          $ {discountPrice}
        </p>

        <Link to={`/products/${category}/${id}`} onClick={handleClick}>
          <Button children="SHOP NOW" className="w-full" />
        </Link>
      </figcaption>
    </motion.figure>
  );
};

export default ProductCard;
