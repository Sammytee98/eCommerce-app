import { Link } from "react-router-dom";
import Button from "../../components/Button";

const EmptyCartMessage = () => {
  return (
    <section className="w-full space-y-5">
      <div className="w-full flex items-center space-x-3 border-t-2 border-t-orange-500 bg-gray-100 p-3 rounded-b-md">
        <div className="h-4 w-4.5 border-2 border-t-4 border-orange-500 "></div>
        <p className="flex items-center text-sm">
          Your cart is currently empty.
        </p>
      </div>

      <Link to="/products">
        <Button children="RETURN TO SHOP" />
      </Link>
    </section>
  );
};

export default EmptyCartMessage;
