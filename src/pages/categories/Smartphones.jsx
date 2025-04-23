import { useStoreState } from "easy-peasy";

const Smartphones = () => {
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const smartphones = categoryProducts.smartphones || [];
  console.log(smartphones);

  return (
    <article>
      <h2 className="font-oswald text-2xl">smartphones</h2>
      <ul>
        {smartphones.map((smartphone) => (
          <li key={smartphone.id}>
            {smartphone.brand}
            <img
              src={smartphone.images[0]}
              alt={smartphone.brand}
              width="50"
              height="50"
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Smartphones;
