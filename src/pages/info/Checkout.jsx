import useFormContext from "../../hooks/useFormContext";
import FormInputs from "./FormInputs";

const Checkout = () => {
  const {
    formData,
    page,
    setPage,
    title,
    // canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    continueToPaymentHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => {
    setPage((prev) => prev + 1);
    console.log("Submitted:", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(formData);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[800px] mx-auto p-4 space-y-8 font-oswald space"
    >
      <h2 className="text-3xl font-bold">{title[page]}</h2>

      <FormInputs />

      {page < 2 && <hr className="border-1 border-gray-200 " />}

      <div className="w-full flex items-center ">
        <button
          type="button"
          onClick={handlePrev}
          disabled={disablePrev}
          className={`text-base bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 transition cursor-pointer rounded-md flex items-center ${prevHide} ${
            disablePrev && "opacity-50"
          }`}
        >
          &lt;&lt; Prev
        </button>
        <div className="grow"></div>
        <button
          type="button"
          onClick={handleNext}
          disabled={disableNext}
          className={`text-base bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 transition cursor-pointer rounded-md flex items-center ${nextHide} ${
            disableNext && "opacity-50"
          }`}
        >
          Next &gt;&gt;
        </button>

        <button
          onClick={handleNext}
          type="button"
          className={`text-base bg-orange-500 hover:bg-orange-600 transition cursor-pointer px-4 py-1 rounded-md text-white self-end ${continueToPaymentHide}`}
        >
          Continue to Payment
        </button>

        <button type="submit" className={``}>
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default Checkout;
