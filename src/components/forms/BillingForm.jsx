import useCheckoutContext from "../../hooks/useCheckoutContext";
import ScrollToTop from "../../layouts/ScrollToTop";

const BillingForm = ({ inputFieldStyle }) => {
  const { countries, formData, handleChange } = useCheckoutContext();

  const {
    billFirstName,
    billLastName,
    billEmail,
    billAddress1,
    billAddress2,
    billCity,
    billState,
    billCountry,
    billZipCode,
  } = formData;

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col space-y-1">
        <label
          htmlFor="firstName"
          className="text-xs text-gray-700 font-medium"
        >
          First Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billFirstName"
          id="firstName"
          placeholder="John"
          pattern="([A-Z])[\w+.]{1,}"
          value={billFirstName}
          required
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="lastName" className="text-xs text-gray-700 font-medium">
          Last Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billLastName"
          id="lastName"
          placeholder="Doe"
          pattern="([A-Z])[\w+.]{1,}"
          value={billLastName}
          required
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="email" className="text-xs text-gray-700 font-medium">
          Email
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="billEmail"
          id="email"
          placeholder="johndoe@gmail.com"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          value={billEmail}
          required
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label
          htmlFor="billAddress1"
          className="text-xs text-gray-700 font-medium"
        >
          Address
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billAddress1"
          id="billAddress1"
          placeholder="123 Hollywood Blvd"
          pattern="[\w\d\s.#]{2,}"
          value={billAddress1}
          required
          className={inputFieldStyle}
        />

        <label htmlFor="billAddress2"></label>
        <input
          onChange={handleChange}
          type="text"
          name="billAdress2"
          id="bilAddress2"
          placeholder="Apt. 2 *optional"
          pattern="[\w\d\s.#]{2,}"
          value={billAddress2}
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="city" className="text-xs text-gray-700 font-medium">
          City
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billCity"
          id="city"
          placeholder="New York City"
          pattern="([A-Z])[\w+.]{1,}"
          value={billCity}
          required
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="state" className="text-xs text-gray-700 font-medium">
          State
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billState"
          id="state"
          placeholder="New York"
          pattern="([A-Z])[\w+.]{1,}"
          value={billState}
          required
          className={inputFieldStyle}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <p className="text-xs text-gray-700 font-medium">Country</p>
        <select
          onChange={handleChange}
          required
          name="billCountry"
          value={billCountry}
          className={inputFieldStyle}
        >
          <option value="">Select Country</option>
          {countries.map((country, i) => {
            const { name } = country;

            return (
              <option key={i + 1} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="zipCode" className="text-xs text-gray-700 font-medium">
          Zip Code
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="billZipCode"
          id="zipCode"
          placeholder="12345"
          pattern="[0-9]{5}"
          maxLength="5"
          minLength="4"
          value={billZipCode}
          required
          className={inputFieldStyle}
        />
      </div>
    </>
  );
};

export default BillingForm;
