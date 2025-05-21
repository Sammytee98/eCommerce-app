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
import slide7 from "../../assets/slider/slide7.avif";

const HeroSection = () => {
  return (
    <section className=" relative w-full min-h-96 flex justify-center items-center px-5">
      <div className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-60">
        <Slider
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          slide4={slide4}
          slide5={slide5}
          slide6={slide6}
          slide7={slide7}
        />
      </div>
      <div className="absolute z-10 max-w-3xl w-full space-y-6 p-4 border-none">
        <h2 className="text-3xl laptop:text-5xl text-shadow-heading font-extrabold text-orange-600 font-oswald tracking-wide leading-tight">
          SMART LIVING STARTS HERE <br /> &mdash; TECH, BEAUTY & HOME ESSENTIALS
        </h2>
        <p className="text-sm tablet:text-base  tracking-wide text-white font-oswald">
          EXPLORE HANDPICKED GADGETS, SELF-CARE MUST-HAVES, AND STYLISH
          FURNITURES &mdash; ALL IN ONE SMOOTH SHOPPING EXPERIENCE.
        </p>
        <Link to="products">
          <Button
            children="START SHOPPING"
            type="button"
            className="text-lg py-2 text-white z-50 transition"
          />
        </Link>
      </div>
    </section>
  );
};

export default memo(HeroSection);
