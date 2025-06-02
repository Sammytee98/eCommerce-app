import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const InfoCards = () => {
  return (
    <section className="grid mobile:grid-cols-2 laptop:grid-cols-3 gap-8 place-items-center px-10">
      <div className="bg-white flex flex-col items-center text-center p-6 rounded-md shadow-cs max-w-96 space-y-3 ">
        <FaEnvelope className="text-3xl text-orange-500" />
        <h3 className="font-semibold text-xl">Customer Support</h3>
        <p className="text-base">
          Reach out to our team anytime &mdash; we'll respond within 24 hours.
        </p>
        <strong>support@gtsstore.com</strong>
      </div>

      <div className="bg-white flex flex-col items-center text-center p-6 rounded-md shadow-cs max-w-96 space-y-3 ">
        <FaPhone className="text-3xl text-orange-500" />
        <h3 className="font-semibold text-xl">Phone Support</h3>
        <p className="text-base">
          Prefer to talk? Give us a call during business hours.
        </p>
        <strong>+1 234 535 9483</strong>
      </div>

      <div className="bg-white flex flex-col items-center text-center p-6 rounded-md shadow-cs max-w-96 space-y-3 ">
        <HiLocationMarker className="text-3xl text-orange-500" />
        <h3 className="font-semibold text-xl">Our Location</h3>
        <p className="text-base">
          241 Nova Street, Willow Grove District, Lagos, NG
        </p>
        <i className="text-sm text-gray-800">
          (Available for pickup orders only)
        </i>
      </div>
    </section>
  );
};

export default InfoCards;
