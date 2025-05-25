import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Logo1 from "../../assets/logo/logo1.svg?react";
import Logo2 from "../../assets/logo/logo2.svg?react";
import Logo3 from "../../assets/logo/logo3.svg?react";
import Logo4 from "../../assets/logo/logo4.svg?react";
import Logo5 from "../../assets/logo/logo5.svg?react";
import Logo6 from "../../assets/logo/logo6.svg?react";
import Logo7 from "../../assets/logo/logo7.svg?react";
import Logo8 from "../../assets/logo/logo8.svg?react";
import Logo9 from "../../assets/logo/logo9.svg?react";
import Logo10 from "../../assets/logo/logo10.svg?react";
import { motion } from "framer-motion";

const LogoSwiper = () => {
  const { width } = useWindowSize();
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
  ];

  let slidesPerView = width < 768 ? 2 : width < 920 ? 3 : width < 1200 ? 4 : 5;

  return (
    <section className="my-10 flex justify-center">
      <div className="max-w-7xl w-full px-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          autoplay
          className=" space-y-10"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i + 1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-36 tablet:w-40 laptop:w-44  mx-auto border-3 border-gray-200 py-2 rounded-md"
              >
                <img
                  src={logo}
                  alt="Company's Logo"
                  className="w-14 h-12 mx-auto"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSwiper;
