import useCheckoutContext from "../../hooks/useCheckoutContext";

const BillingInfoReview = ({ labelStyle, listStyle }) => {
  const { formData, getValues } = useCheckoutContext();
  const info = {
    name: getValues("billFirstName") + getValues("billLastName"),
    email: getValues("billEmail"),
    address: getValues("billAddress1"),
    city: getValues("billCity"),
    state: getValues("billState"),
    country: getValues("billCountry"),
    zipCode: getValues("billZipCode"),
  };

  return (
    <div className="w-full bg-gray-100 px-4 py-2 rounded-md space-y-5">
      <h3 className="text-lg text-gray-800 font-bold">Billing Information</h3>

      <ul className="list-none text-gray-600 space-y-1.5">
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Full Name:</p> <span>{info.name}</span>{" "}
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Email Address:</p> <span>{info.email}</span>{" "}
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
    </div>
  );
};

export default BillingInfoReview;
