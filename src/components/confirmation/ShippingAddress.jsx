import { useStoreState } from "easy-peasy";
// import useCheckoutContext from "../../hooks/useCheckoutContext";

const ShippingAddress = () => {
  const customerAddress = useStoreState((state) => state.customerAddress);

  const {
    shipFirstName,
    shipLastName,
    shipAddress1,
    shipCity,
    shipState,
    shipCountry,
  } = customerAddress;

  return (
    <section className="p-4 bg-gray-100 rounded-md shadow-md text-sm text-gray-700 space-y-3">
      <h4 className="text-xl font-medium text-gray-800">Shipping Address</h4>
      <div className="space-y-1.5">
        <p>
          {shipFirstName} {shipLastName}
        </p>
        <p>{shipAddress1}</p>
        <p>
          {shipCity}, {shipState}
        </p>
        <p>{shipCountry}</p>
      </div>
    </section>
  );
};

export default ShippingAddress;
