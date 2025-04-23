import { useStoreState } from "easy-peasy";

const Fragrances = () => {
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const fragrances = categoryProducts.fragrances || [];
  console.log(fragrances);

  return (
    <article>
      <h2 className="font-oswald text-2xl">fragrances</h2>
      <ul>
        {fragrances.map((fragrance) => (
          <li key={fragrance.id}>
            {fragrance.brand}
            <img
              src={fragrance.images[0]}
              alt={fragrance.brand}
              width="50"
              height="50"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Fragrances;
