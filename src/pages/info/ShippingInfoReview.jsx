import useFormContext from "../../hooks/useFormContext";

const ShippingInfoReview = ({ labelStyle, listStyle }) => {
  const { formData } = useFormContext();
  const {
    sameAsBilling,
    shipFirstName,
    shipLastName,
    shipEmail,
    shipAddress1,
    shipCity,
    shipState,
    shipCountry,
    shipZipCode,
  } = formData;

  return (
    <div className="w-full bg-gray-100 px-4 py-2 rounded-md space-y-5">
      <h3 className="text-base text-gray-800 font-bold">
        Shipping Information
      </h3>

      {sameAsBilling ? (
        <p className="italic text-sm text-gray-600">Same as Billing</p>
      ) : (
        <ul className="list-none text-gray-600 space-y-1.5">
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Full Name:</p>{" "}
            <span>{`${shipFirstName} ${shipLastName}`}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Email Address:</p>{" "}
            <span>{shipEmail}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Street Address:</p>{" "}
            <span>{shipAddress1}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>City:</p> <span>{shipCity}</span>{" "}
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>State:</p> <span>{shipState}</span>{" "}
          </li>
          <li className={listStyle}>
            <p className={labelStyle}>Zip Code</p>
            <span>{shipZipCode}</span>
          </li>
          <li className={listStyle}>
            {" "}
            <p className={labelStyle}>Country:</p> <span>{shipCountry}</span>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShippingInfoReview;
