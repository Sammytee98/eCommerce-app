import { useState, useEffect, memo } from "react";
import { motion } from "motion/react";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";
import slide6 from "../assets/slider/slide6.jpg";
import slide7 from "../assets/slider/slide7.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-border w-full h-full overflow-hidden relative">
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${currentSlide * 100}%` }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full shrink-0">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(Slider);
