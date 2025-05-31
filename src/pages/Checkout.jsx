import useCheckoutContext from "../hooks/useCheckoutContext";
import FormInputs from "../components/checkout/FormInputs";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Checkout = () => {
  const {
    page,
    setPage,
    title,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    continueToPaymentHide,
    confirmAndPayButtonHide,
    handleSubmit,
    onSubmit,
    isSubmitting,
    register,
    errors,
  } = useCheckoutContext();

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[800px] mx-auto p-4 space-y-8 font-oswald space"
    >
      <h2 className="text-3xl font-bold">{title[page]}</h2>

      <FormInputs />

      {page < 2 && <hr className="border-1 border-gray-200 " />}

      {page === Object.keys(title).length - 1 && (
        <div>
          <div className="flex space-x-1 items-center text-sm">
            <input
              type="checkbox"
              id="terms"
              className="w-3 h-3 mt-0.5 cursor-pointer"
              {...register("terms")}
            />
            <label htmlFor="terms" className="cursor-pointer">
              I agree to the Terms and Conditions
            </label>
          </div>
          {errors.terms && (
            <p className="text-xs text-red-600 mt-2">{errors.terms.message}</p>
          )}
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
          className={`${nextHide} cursor-pointer ${
            disableNext && "opacity-30 cursor-not-allowed"
          }`}
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
          className={`${confirmAndPayButtonHide} w-full flex justify-center items-center gap-2 py-2.5 font-bold tracking-wider ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer opacity-100"
          }`}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size={20} color="white" />{" "}
              <span>proccessing...</span>
            </>
          ) : (
            "Confirm & Pay"
          )}
        </Button>
      </div>
      {errors.root && (
        <p className="text-xs text-red-600">{errors.root.message}</p>
      )}
    </motion.form>
  );
};

export default Checkout;
