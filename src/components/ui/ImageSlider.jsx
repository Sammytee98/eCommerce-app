import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

const Slider = ({ slide1, slide2, slide3, slide4, slide5, slide6, slide7 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);

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
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(Slider);
