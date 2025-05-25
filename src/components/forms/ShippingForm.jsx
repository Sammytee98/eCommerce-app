import useCheckoutContext from "../../hooks/useCheckoutContext";
import ScrollToTop from "../../layouts/ScrollToTop";

const ShippingForm = ({ inputFieldStyle }) => {
  const { countries, formData, handleChange } = useCheckoutContext();

  const {
    sameAsBilling,
    shipFirstName,
    shipLastName,
    shipEmail,
    shipAddress1,
    shipAddress2,
    shipCity,
    shipState,
    shipCountry,
    shipZipCode,
  } = formData;

  return (
    <>
      <ScrollToTop />
      <div className="flex items-center space-x-1 col-span-full mb-5">
        <input
          type="checkbox"
          name="sameAsBilling"
          id="sameAsBilling"
          checked={sameAsBilling}
          onChange={handleChange}
          className="w-3 h-3 mt-0.5 peer"
        />
        <label
          htmlFor="sameAsBilling"
          className="text-xs tablet:sm tracking-wide peer-hover:cursor-pointer"
        >
          Same as Billing Address
        </label>
      </div>

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
          name="shipFirstName"
          id="firstName"
          placeholder="John"
          pattern="([A-Z])[\w+.]{1,}"
          value={shipFirstName}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="lastName" className="text-xs text-gray-700 font-medium">
          Last Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="shipLastName"
          id="lastName"
          placeholder="Doe"
          pattern="([A-Z])[\w+.]{1,}"
          value={shipLastName}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="email" className="text-xs text-gray-700 font-medium">
          Email
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="shipEmail"
          id="email"
          placeholder="johndoe@gmail.com"
          value={shipEmail}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label
          htmlFor="shipAddress1"
          className="text-xs text-gray-700 font-medium"
        >
          Address
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="shipAddress1"
          id="shipAddress1"
          placeholder="123 Hollywood Blvd"
          pattern="[\w\d\s.#]{2,}"
          value={shipAddress1}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
        <label htmlFor="shipAddress"></label>
        <input
          onChange={handleChange}
          type="text"
          name="shipAddress2"
          id="shipAddress2"
          placeholder="Apt. 2 *optional"
          pattern="[\w\d\s.#]{2,}"
          value={shipAddress2}
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="city" className="text-xs text-gray-700 font-medium">
          City
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="shipCity"
          id="city"
          placeholder="New York City"
          pattern="([A-Z])[\w+.]{1,}"
          value={shipCity}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="state" className="text-xs text-gray-700 font-medium">
          State
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="shipState"
          id="state"
          placeholder="New York"
          pattern="([A-Z])[\w+.]{1,}"
          value={shipState}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>

      <div className="flex flex-col space-y-1 col-span-full">
        <p className="text-xs text-gray-700 font-medium">Country</p>
        <select
          onChange={handleChange}
          required
          name="shipCountry"
          value={shipCountry}
          className={inputFieldStyle}
          disabled={sameAsBilling}
        >
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
          name="shipZipCode"
          id="zipCode"
          placeholder="12345"
          pattern="[0-9]{5}"
          maxLength="5"
          value={shipZipCode}
          required
          className={inputFieldStyle}
          disabled={sameAsBilling}
        />
      </div>
    </>
  );
};

export default ShippingForm;
