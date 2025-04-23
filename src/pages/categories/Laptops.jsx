import { useStoreState } from "easy-peasy";

const Laptops = () => {
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const laptops = categoryProducts.laptops || [];
  console.log(laptops);

  return (
    <article>
      <h2 className="font-oswald text-2xl">Laptops</h2>
      <ul>
        {laptops.map((laptop) => (
          <li key={laptop.id}>
            {laptop.brand}
            <img
              src={laptop.images[0]}
              alt={laptop.brand}
              width="50"
              height="50"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Laptops;
