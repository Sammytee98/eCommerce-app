import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-5 bg-orange-500 py-10 px-6 my-8">
      <h3 className="text-2xl tablet:text-3xl text-center text-white font-bold">
        Experience GTS Today
      </h3>

      <p className="text-base tablet:text-lg text-white">
        Start exploring our categories and discover products that implify your
        everyday.
      </p>

      <Link to="/products">
        <Button type="button" variant="outline">
          <span className="text-orange-600">Start Shopping</span>
          <FaArrowRight className="text-orange-600 grid items-center" />
        </Button>
      </Link>
    </section>
  );
};

export default CTA;
