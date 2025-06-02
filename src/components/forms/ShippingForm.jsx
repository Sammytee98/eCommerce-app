import useCheckoutContext from "../../hooks/useCheckoutContext";
import ScrollToTop from "../../layouts/ScrollToTop";

const ShippingForm = ({ inputFieldStyle }) => {
  // Pul in error handling, list of countries, samAsBilling(Boolean), sameAsBilling handler from context
  const { countries, sameAsBilling, handleSameAsBilling, register, errors } =
    useCheckoutContext();

  return (
    <>
      <ScrollToTop />

      {/* Same as billing checkbox */}
      <div className="flex items-center space-x-1.5 col-span-full mb-5">
        <input
          type="checkbox"
          id="sameAsBilling"
          onChange={handleSameAsBilling}
          className="w-4 h-4 mt-0.5 peer"
          {...register("sameAsBilling")}
        />
        <label
          htmlFor="sameAsBilling"
          className="text-base tracking-wide peer-hover:cursor-pointer"
        >
          Same as Billing Address
        </label>
      </div>

      {/* First Name */}
      <div className="flex flex-col space-y-1">
        <label
          htmlFor="firstName"
          className="text-base text-gray-700 font-medium"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="John"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipFirstName && "border-red-600"
          }`}
          {...register("shipFirstName")}
        />
        {errors.shipFirstName && (
          <p className="text-xs text-red-600">{errors.shipFirstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col space-y-1">
        <label
          htmlFor="lastName"
          className="text-base text-gray-700 font-medium"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Doe"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipLastName && "border-red-600"
          }`}
          {...register("shipLastName")}
        />
        {errors.shipLastName && (
          <p className="text-xs text-red-600">{errors.shipLastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="email" className="text-base text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipEmail && "border-red-600"
          }`}
          {...register("shipEmail")}
        />
        {errors.shipEmail && (
          <p className="text-xs text-red-600">{errors.shipEmail.message}</p>
        )}
      </div>

      {/* Address Line 1 + Line 2 (optional) */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label
          htmlFor="shipAddress1"
          className="text-base text-gray-700 font-medium"
        >
          Address
        </label>
        <input
          type="text"
          id="shipAddress1"
          placeholder="123 Hollywood Blvd"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipAddress1 && "border-red-600"
          }`}
          {...register("shipAddress1")}
        />
        {errors.shipAddress1 && (
          <p className="text-xs text-red-600">{errors.shipAddress1.message}</p>
        )}

        {/* Optional address field */}
        <label htmlFor="shipAddress"></label>
        <input
          type="text"
          id="shipAddress2"
          placeholder="Apt. 2 *optional"
          disabled={sameAsBilling}
          className={inputFieldStyle}
          {...register("shipAddress2")}
        />
      </div>

      {/* City */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="city" className="text-base text-gray-700 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="New York City"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipCity && "border-red-600"
          }`}
          {...register("shipCity")}
        />

        {errors.shipCity && (
          <p className="text-xs text-red-600">{errors.shipCity.message}</p>
        )}
      </div>

      {/* State */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="state" className="text-base text-gray-700 font-medium">
          State
        </label>
        <input
          type="text"
          id="state"
          placeholder="New York"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipState && "border-red-600"
          }`}
          {...register("shipState")}
        />
        {errors.shipState && (
          <p className="text-xs text-red-600">{errors.shipState.message}</p>
        )}
      </div>

      {/* Country -Select Dropdown */}
      <div className="flex flex-col space-y-1 col-span-full">
        <p className="text-base text-gray-700 font-medium">Country</p>
        <select
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipCountry && "border-red-600"
          }`}
          {...register("shipCountry")}
        >
          <option value="">Select a country</option>
          {countries.map((country, i) => {
            const { name } = country;

            return (
              <option key={i + 1} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        {errors.billCountry && (
          <p className="text-xs text-red-600">{errors.shipCountry.message}</p>
        )}
      </div>

      {/* Zip Code */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label
          htmlFor="zipCode"
          className="text-base text-gray-700 font-medium"
        >
          Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          placeholder="12345"
          disabled={sameAsBilling}
          className={`${inputFieldStyle} ${
            errors.shipZipCode && "border-red-600"
          }`}
          {...register("shipZipCode")}
        />
      </div>
    </>
  );
};

export default ShippingForm;
