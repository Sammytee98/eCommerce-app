import useCheckoutContext from "../../hooks/useCheckoutContext";

const ShippingInfoReview = ({ labelStyle, listStyle }) => {
  const { sameAsBilling, getValues } = useCheckoutContext();

  // Get shipping form fields value
  const info = {
    name: `${getValues("shipFirstName")} ${getValues("shipLastName")}`,
    email: getValues("shipEmail"),
    address: getValues("shipAddress1"),
    city: getValues("shipCity"),
    state: getValues("shipState"),
    country: getValues("shipCountry"),
    zipCode: getValues("shipZipCode"),
  };

  return (
    <div className="w-full bg-gray-100 px-4 py-2 rounded-md space-y-5">
      <h3 className="text-lg text-gray-800 font-bold">Shipping Information</h3>

      {sameAsBilling ? (
        <p className="italic text-base text-gray-600">Same as Billing</p>
      ) : (
        <ul className="list-none text-gray-600 space-y-1.5">
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Full Name:</p> <span>{info.name}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Email Address:</p>{" "}
            <span>{info.email}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Street Address:</p>{" "}
            <span>{info.address}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>City:</p> <span>{info.city}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>State:</p> <span>{info.state}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Country:</p> <span>{info.country}</span>{" "}
          </li>
          <li className={listStyle}>
            <p className={labelStyle}>Zip Code</p>
            <span>{info.zipCode}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShippingInfoReview;
