import { memo } from "react";
import Slider from "../../components/ImageSlider";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" relative w-full min-h-96 flex justify-center items-center px-5">
      <div className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-60">
        <Slider />
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
            dynamicStyle="text-lg text-white z-50 transition"
          />
        </Link>
      </div>
    </section>
  );
};

export default memo(HeroSection);
