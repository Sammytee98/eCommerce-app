import { memo } from "react";
import Slider from "../ui/ImageSlider";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slider/slide1.jpg";
import slide2 from "../../assets/slider/slide2.jpg";
import slide3 from "../../assets/slider/slide3.jpg";
import slide4 from "../../assets/slider/slide4.avif";
import slide5 from "../../assets/slider/slide5.jpg";
import slide6 from "../../assets/slider/slide6.avif";
import { motion } from "framer-motion";

const HeroSection = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <section className=" relative w-full min-h-96 flex justify-center items-center px-5">
      <div className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-60">
        <Slider images={images} />
      </div>
      <div className="absolute z-10 max-w-3xl w-full space-y-8 p-4 border-none">
        <motion.h2
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl laptop:text-5xl text-shadow-heading font-extrabold text-orange-600 font-oswald tracking-wide leading-tight uppercase"
        >
          Smart living starts here <br /> &mdash; tech, beauty & home essentials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-base  tracking-wide text-white font-oswald uppercase"
        >
          explore handpicked gadgets and self-care-must-haves &mdash; all in one
          smooth shopping experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="w-fit rounded-md"
        >
          <Link to="products">
            <Button
              children="START SHOPPING"
              type="button"
              className="text-white z-50 transition"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
