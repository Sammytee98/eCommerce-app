import Slider from "../../components/ImageSlider";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <section className=" relative w-full min-h-full flex justify-center items-center px-5">
      <div className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-50">
        <Slider />
      </div>
      <div className="absolute top-1/4 transform translate-y-1/4 z-10 max-w-3xl w-full space-y-8 p-4 border-none">
        <h2 className="text-3xl text-white font-oswald">
          Style. Tech. Beauty. Home. All in One Place
        </h2>
        <p className="text-base text-white font-open-sans">
          Explore a wide range of high-quality products handpicked just for you
          &mdash; all categories, all savings, delivered to your door.
        </p>
        <Button
          children="Start Shopping"
          type="button"
          dynamicStyle="bg-blue-300/50 hover:bg-blue-300/70 text-lg text-white z-50 transition rounded-sm"
        />
      </div>
    </section>
  );
};

export default HeroSection;
