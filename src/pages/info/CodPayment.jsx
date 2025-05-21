import CodBadge from "../../assets/cod_badge.png";

const CodPayment = () => {
  return (
    <div className="space-y-2 flex flex-col">
      <h4 className="text-lg text-gray-900 font-semibold">Cash on Delivery</h4>

      <p className="mx-2 bg-gray-50 p-2 text-sm italic text-gray-600 rounnded-md flex space-x-2 items-center">
        <img src={CodBadge} alt="Paypal Logo" className="w-20 h-20" />
        <span>
          You will pay in cash when the products is delivered to your address
        </span>
      </p>
    </div>
  );
};

export default CodPayment;
