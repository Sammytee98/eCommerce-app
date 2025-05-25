import { useStoreState } from "easy-peasy";
import electronicsPNG from "../../assets/electronics.png";
import jeweleryPNG from "../../assets/jewelery.png";
import menClothingPNG from "../../assets/mens-clothing.png";
import womenClothingPNG from "../../assets/womens-clothing.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const electronics = categoryProducts.electronics || [];
  const jewelery = categoryProducts.jewelery || [];
  const mensClothing = categoryProducts[`men's clothing`] || [];
  const womensClothing = categoryProducts[`women's clothing`] || [];
  console.log(womensClothing);

  const data = useMemo(
    () => [
      {
        id: 1,
        title: "Electronics",
        image: electronicsPNG,
        productLength: electronics.length,
      },
      {
        id: 2,
        title: "Jewelery",
        image: jeweleryPNG,
        productLength: jewelery.length,
      },
      {
        id: 3,
        title: `Men's Clothing`,
        image: menClothingPNG,
        productLength: mensClothing.length,
      },
      {
        id: 4,
        title: `Women's Clothing`,
        image: womenClothingPNG,
        productLength: womensClothing.length,
      },
    ],
    [
      electronics.length,
      jewelery.length,
      mensClothing.length,
      womensClothing.length,
    ]
  );

  const handleNavigation = (endpoint) => {
    navigate(`/products/category/${endpoint}`);
  };

  return (
    <section id="categories" className="w-full h-auto mt-10 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-orange-500 text-xs tablet:text-sm">
          SHOP BY CATEGORY
        </p>
        <h3 className="text-2xl tablet:text-3xl font-semibold">
          SHOP BY CATEGORY
        </h3>
        <hr className="w-12 border-1 text-orange-500" />
      </div>

      <div className="grid justify-items-center grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-10 gap-y-5 p-2 my-10">
        {data.map((category) => {
          const { id, title, image, productLength } = category;
          const lowerCaseTitle = title.toLocaleLowerCase();
          const endpoint =
            lowerCaseTitle === "furnitures" ? "furniture" : lowerCaseTitle;

          return (
            <motion.figure
              whileHover={{
                backgroundColor: "rgba(249, 115, 22, 0.1)",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => handleNavigation(endpoint)}
              key={id}
              className="w-36 tablet:w-52 h-48 relative bg-gray-100 rounded-md  cursor-pointer"
            >
              <img src={image} alt={title} className="w-full h-full p-3" />
              <motion.figcaption
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-0 right-1/5 bg-white/95 z-10 px-5 py-2.5 rounded-r-md flex flex-col items-center"
              >
                <span className="text-base font-semibold">
                  {title.toLocaleUpperCase()}
                </span>
                <span className="text-xs text-orange-500">{`${productLength} PRODUCTS`}</span>
              </motion.figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
};

export default ShopByCategory;
