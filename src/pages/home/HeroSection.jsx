import { memo } from "react";
import Slider from "../../components/ImageSlider";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <section className=" relative w-full min-h-96 flex justify-center items-center px-5">
      <div className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-50">
        <Slider />
      </div>
      <div className="absolute top-1/12 transform translate-y-1/12 z-10 max-w-3xl w-full space-y-8 p-4 border-none">
        <h2 className="text-4xl font-semibold text-white font-oswald">
          STYLE. TECH. BEAUTY. HOME. ALL IN ONE PLACE
        </h2>
        <p className="text-base text-white font-open-sans">
          EXPLORE A WIDE RANGE OF HIGH-QUALITY PRODUCTS HANDPICKED JUST FOR YOU
          &mdash; ALL CATEGORIES, ALL SAVINGS, DELIVERED TO YOUR DOOR.
        </p>
        <Button
          children="START SHOPPING"
          type="button"
          dynamicStyle="border-3 border-blue-300/70 hover:bg-blue-300/70 text-lg text-white z-50 transition rounded-sm"
        />
      </div>
    </section>
  );
};

export default memo(HeroSection);
