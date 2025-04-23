import { useStoreState } from "easy-peasy";

const Beauty = () => {
  const categoryProducts = useStoreState((state) => state.categoryProducts);

  const beauty = categoryProducts.beauty || [];
  console.log(beauty);

  return (
    <article>
      <h2 className="font-oswald text-2xl">Beauty</h2>
      <ul>
        {beauty.map((b) => (
          <li key={b.id}>
            {b.brand}
            <img src={b.images[0]} alt={b.brand} width="50" height="50" />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Beauty;
