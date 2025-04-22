import Button from "./Button";

const Subscription = () => {
  return (
    <form className="w-sm flex flex-col space-y-3">
      <label
        htmlFor="subscription"
        className="text-xl font-oswald text-center font-semibold"
      >
        SUBSCRIBE
      </label>
      <input
        type="text"
        id="subscription"
        placeholder="Your email address..."
        className="w-full border-2 border-neutral-300 bg-white px-3 py-1.5 rounded-sm font-inter placeholder:"
      />
      <Button
        type="button"
        children="SUBSCRIBE"
        dynamicStyle="w-2/4 mx-auto bg-blue-500 hover:bg-blue-700 transition cursor-pointer text-white font-open-sans rounded-sm "
      />
    </form>
  );
};

export default Subscription;
