import { useStoreState } from "easy-peasy";
import beautyPNG from "../../assets/beauty.png";
import furniturePNG from "../../assets/furniture.png";
import fragrancePNG from "../../assets/fragrance.png";
import laptopPNG from "../../assets/laptop.png";
import smartphonePNG from "../../assets/smartphone.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useMemo } from "react";

const ProductCategories = () => {
  const navigate = useNavigate();
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const smartphones = categoryProducts.smartphones || [];
  const laptops = categoryProducts.laptops || [];
  const furnitures = categoryProducts.furniture || [];
  const fragrances = categoryProducts.fragrances || [];
  const beauty = categoryProducts.beauty || [];

  const data = useMemo(
    () => [
      {
        id: 1,
        title: "Beauty",
        image: beautyPNG,
        productLength: beauty.length,
      },
      {
        id: 2,
        title: "Fragrances",
        image: fragrancePNG,
        productLength: fragrances.length,
      },
      {
        id: 3,
        title: "Furnitures",
        image: furniturePNG,
        productLength: furnitures.length,
      },
      {
        id: 4,
        title: "Laptops",
        image: laptopPNG,
        productLength: laptops.length,
      },
      {
        id: 5,
        title: "Smartphones",
        image: smartphonePNG,
        productLength: smartphones.length,
      },
    ],
    [
      beauty.length,
      fragrances.length,
      furnitures.length,
      laptops.length,
      smartphones.length,
    ]
  );

  const handleNavigation = (endpoint) => {
    navigate(`category/${endpoint}`);
  };

  return (
    <section className="w-full h-auto mt-10 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-blue-300/70 text-base">SHOP BY CATEGORY</p>
        <h3 className="text-3xl font-extrabold">SHOP BY CATEGORY</h3>
        <hr className="w-16 border-1 text-blue-300/70" />
      </div>

      <div className="grid justify-items-center grid-cols-1 small:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-5 gap-y-7 my-10">
        {data.map((category) => {
          const { id, title, image, productLength } = category;
          return (
            <motion.figure
              whileHover={{ backgroundColor: "rgba(147, 197, 253, 0.2)" }}
              onClick={() => handleNavigation(title)}
              transition={{ duration: 0.3 }}
              key={id}
              className="w-44 h-56 relative bg-blue-300/10 rounded-md  cursor-pointer"
            >
              <img src={image} alt={title} className="w-full h-full p-3" />
              <motion.figcaption
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-1/5 bg-white/95 z-10 px-5 py-2.5 rounded-r-md flex flex-col items-center"
              >
                <span className="text-lg font-semibold">
                  {title.toLocaleUpperCase()}
                </span>
                <span className="text-sm text-blue-300/70">{`${productLength} PRODUCTS`}</span>
              </motion.figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategories;
