import { useStoreState } from "easy-peasy";

const ShopAll = () => {
  const products = useStoreState((state) => state.products);

  console.log(products);

  return (
    <main>
      <h2>All Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.brand}
            <img
              src={product.images[0]}
              alt={product.brand}
              width="50"
              height="50"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ShopAll;
