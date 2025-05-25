import useCheckoutContext from "../hooks/useCheckoutContext";
import FormInputs from "../components/checkout/FormInputs";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const Checkout = () => {
  const {
    formData,
    page,
    setPage,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    continueToPaymentHide,
    confirmAndPayButtonHide,
    handleChange,
    handleSubmit,
  } = useCheckoutContext();

  console.log(!canSubmit);

  const { tacAgreement } = formData;

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => {
    setPage((prev) => prev + 1);
    console.log("Submitted:", formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="w-full max-w-[800px] mx-auto p-4 space-y-8 font-oswald space"
    >
      <h2 className="text-3xl font-bold">{title[page]}</h2>

      <FormInputs />

      {page < 2 && <hr className="border-1 border-gray-200 " />}

      {page === Object.keys(title).length - 1 && (
        <div className="flex space-x-1 items-center text-sm">
          <input
            type="checkbox"
            name="tacAgreement"
            id="tacAgreement"
            value={tacAgreement}
            onChange={handleChange}
          />
          <label htmlFor="tacAgreement">
            I agree to the Terms and Conditions
          </label>
        </div>
      )}

      <div className="w-full flex items-center ">
        <Button
          type="button"
          onClick={handlePrev}
          disabled={disablePrev}
          className={`${prevHide} ${disablePrev && "opacity-50"} `}
        >
          &lt;&lt; Prev
        </Button>
        <div className="grow"></div>
        <Button
          type="button"
          onClick={handleNext}
          disabled={disableNext}
          className={`${nextHide} ${disableNext && "opacity-50"}`}
        >
          Next &gt;&gt;
        </Button>

        <Button
          onClick={handleNext}
          type="button"
          className={`self-end ${continueToPaymentHide}`}
          children="Continue to Payment"
        />

        <Button
          type="submit"
          disabled={!canSubmit}
          className={`${confirmAndPayButtonHide} w-full py-2.5 font-bold tracking-wider  ${
            !canSubmit && "opacity-20 cursor-not-allowed"
          }`}
          children="Confirm & Pay"
        />
      </div>
    </motion.form>
  );
};

export default Checkout;
