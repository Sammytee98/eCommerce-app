import useFormContext from "../../hooks/useFormContext";

const BillingInfoReview = ({ labelStyle, listStyle }) => {
  const { formData } = useFormContext();
  const {
    billFirstName,
    billLastName,
    billEmail,
    billAddress1,
    billCity,
    billState,
    billCountry,
    billZipCode,
  } = formData;

  return (
    <div className="w-full bg-gray-100 px-4 py-2 rounded-md space-y-5">
      <h3 className="text-lg text-gray-800 font-bold">Billing Information</h3>

      <ul className="list-none text-gray-600 space-y-1.5">
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Full Name:</p>{" "}
          <span>{`${billFirstName} ${billLastName}`}</span>{" "}
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Email Address:</p> <span>{billEmail}</span>{" "}
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Street Address:</p>{" "}
          <span>{billAddress1}</span>{" "}
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>City:</p> <span>{billCity}</span>{" "}
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>State:</p> <span>{billState}</span>{" "}
        </li>
        <li className={listStyle}>
          <p className={labelStyle}>Zip Code</p>
          <span>{billZipCode}</span>
        </li>
        <li className={listStyle}>
          {" "}
          <p className={labelStyle}>Country:</p> <span>{billCountry}</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default BillingInfoReview;
