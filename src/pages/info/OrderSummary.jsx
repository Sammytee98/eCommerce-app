import { useStoreState } from "easy-peasy";

const OrderSummary = () => {
  const cartItems = useStoreState((state) => state.cartItems);

  return (
    <div className="w-full bg-gray-100 p-4 rounded-md space-y-5">
      <h3 className="text-lg text-gray-800 font-bold">Your Items</h3>

      <ul className="list-none space-y-3">
        {cartItems.map((item) => {
          const { id, image, title, discountPrice, quantity } = item;

          return (
            <li
              key={id}
              className="flex justify-between items-center text-xs text-gray-600 border-b-1 border-gray-200 pb-2"
            >
              <img src={image} alt={title} className="w-8 h-8 bg-gray-50" />
              <p>
                {" "}
                <span className="truncate max-w-10 mr-1" title={title}>
                  {title.slice(0, 30)}...
                </span>{" "}
                x <span className="ml-1">{quantity}</span>
              </p>

              <p>${discountPrice * quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderSummary;
