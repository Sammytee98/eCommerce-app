import { useStoreState } from "easy-peasy";

const Furnitures = () => {
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const furniture = categoryProducts.furniture || [];

  return (
    <article>
      <h2>Furniture</h2>
      <ul>
        {furniture.map((f) => (
          <li key={f.id}>
            {f.brand}
            <img src={f.images[0]} alt={f.brand} width="50" height="50" />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Furnitures;
