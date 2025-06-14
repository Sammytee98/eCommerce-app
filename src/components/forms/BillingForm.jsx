import useCheckoutContext from "../../hooks/useCheckoutContext";
import ScrollToTop from "../../layouts/ScrollToTop";

const BillingForm = ({ inputFieldStyle }) => {
  // Pull in error handling, register and list of countries from context
  const { countries, handleChange, register, errors } = useCheckoutContext();

  return (
    <>
      {/* Ensures page scrolls to top on mount */}
      <ScrollToTop />

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
          className={`${inputFieldStyle} ${
            errors.billFirstName && "border-red-600"
          }`}
          {...register("billFirstName")}
        />
        {errors.billFirstName && (
          <p className="text-xs text-red-600">{errors.billFirstName.message}</p>
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
          className={`${inputFieldStyle} ${
            errors.billLastName && "border-red-600"
          }`}
          {...register("billLastName")}
        />
        {errors.billLastName && (
          <p className="text-xs text-red-600">{errors.billLastName.message}</p>
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
          className={`${inputFieldStyle} ${
            errors.billEmail && "border-red-600"
          }`}
          {...register("billEmail")}
        />
        {errors.billEmail && (
          <p className="text-xs text-red-600">{errors.billEmail.message}</p>
        )}
      </div>

      {/* Address Line 1 + Line 2 (optional) */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label
          htmlFor="billAddress1"
          className="text-base text-gray-700 font-medium"
        >
          Address
        </label>
        <input
          type="text"
          id="billAddress1"
          placeholder="123 Hollywood Blvd"
          className={`${inputFieldStyle} ${
            errors.billAddress1 && "border-red-600"
          }`}
          {...register("billAddress1")}
        />
        {errors.billAddress1 && (
          <p className="text-xs text-red-600">{errors.billAddress1.message}</p>
        )}

        {/* Optional address field */}
        <label htmlFor="billAddress2"></label>
        <input
          type="text"
          id="bilAddress2"
          placeholder="Apt. 2 *optional"
          className={inputFieldStyle}
          {...register("billAddress2")}
        />
      </div>

      {/* City */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="city" className="text-base text-gray-700 font-medium">
          City
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="city"
          placeholder="New York City"
          className={`${inputFieldStyle} ${
            errors.billCity && "border-red-600"
          }`}
          {...register("billCity")}
        />
        {errors.billCity && (
          <p className="text-xs text-red-600">{errors.billCity.message}</p>
        )}
      </div>

      {/* State */}
      <div className="flex flex-col space-y-1 col-span-full">
        <label htmlFor="state" className="text-base text-gray-700 font-medium">
          State
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="state"
          placeholder="New York"
          className={`${inputFieldStyle} ${
            errors.billState && "border-red-600"
          }`}
          {...register("billState")}
        />
        {errors.billState && (
          <p className="text-xs text-red-600">{errors.billState.message}</p>
        )}
      </div>

      {/* Country - Select Dropdown */}
      <div className="flex flex-col space-y-1 col-span-full">
        <p className="text-base text-gray-700 font-medium">Country</p>
        <select
          className={`${inputFieldStyle} ${
            errors.billCountry && "border-red-600"
          }`}
          {...register("billCountry")}
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
        {errors.billCountry && (
          <p className="text-xs text-red-600">{errors.billCountry.message}</p>
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
          className={`${inputFieldStyle} ${
            errors.billZipCode && "border-red-600"
          }`}
          {...register("billZipCode")}
        />
        {errors.billZipCode && (
          <p className="text-xs text-red-600">{errors.billZipCode.message}</p>
        )}
      </div>
    </>
  );
};

export default BillingForm;
