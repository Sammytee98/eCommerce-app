import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductContext from "../../contexts/ProductContext";
import { useContext } from "react";

const ProductImageSwiper = () => {
  const { images, title, product } = useContext(ProductContext);

  return (
    <div className="w-full laptop:min-w-[500px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {product &&
          images.map((image, i) => (
            <SwiperSlide key={i + 1}>
              <div className="relative  bg-blue-300/10 rounded-md">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[500px] laptop:h-[650px] mx-auto"
                />
                <p className="absolute top-4 left-4 text-sm bg-white px-2 py-1 rounded-2xl">
                  Sale!
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSwiper;
