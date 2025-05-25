import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductContext from "../../contexts/ProductContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const ProductImageSwiper = () => {
  const { image, title, product } = useContext(ProductContext);
  const imageArr = [
    image,
    "https://placehold.co/300x200/eeeeee/333333?text=Product+Image",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full laptop:min-w-[500px] desktop:max-w-[700px]"
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="space-y-1"
      >
        {product &&
          imageArr.map((image, i) => (
            <SwiperSlide key={i + 1}>
              <div className="relative p-5 bg-gray-100 rounded-md">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[450px] laptop:h-[600px] mx-auto"
                  loading="lazy"
                />
                <p className="absolute top-4 left-4 text-sm bg-orange-100 text-orange-500 px-3 py-0.5 rounded-xs">
                  Sale!
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductImageSwiper;
