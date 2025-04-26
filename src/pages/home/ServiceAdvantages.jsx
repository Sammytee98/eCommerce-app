import { FaShieldAlt, FaRegCreditCard, FaCartArrowDown } from "react-icons/fa";
import AdvantagesData from "../../data/advantagesData";
import { FaTruckFast } from "react-icons/fa6";

const ServiceAdvantages = () => {
  const advantages = AdvantagesData(
    FaShieldAlt,
    FaRegCreditCard,
    FaTruckFast,
    FaTruckFast,
    FaCartArrowDown
  );

  return (
    <section className="w-full h-auto mt-10 p-5 font-oswald">
      <div className="space-y-5 flex flex-col items-center">
        <p className="text-blue-300/70 text-base">BEST PRODUCTS</p>
        <h3 className="text-3xl font-extrabold">WHAT MAKES US DIFFERENT</h3>
        <hr className="w-16 border-1 text-blue-300/70" />
      </div>

      <div className="px-2.5 py-7 grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-4 gap-x-5 gap-y-7 my-10">
        {advantages.map((advantage) => {
          const { id, icon: FaIcon, heading, content } = advantage;

          return (
            <div
              key={id}
              className="p-3 space-y-4 text-center flex flex-col items-center"
            >
              <FaIcon className="text-4xl text-blue-300/70" />
              <h4 className="text-2xl font-semibold">
                {heading.toLocaleUpperCase()}
              </h4>
              <p className="text-base">{content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceAdvantages;
