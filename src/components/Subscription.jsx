import Button from "./Button";

const Subscription = () => {
  return (
    <form className=" flex flex-col space-y-3">
      <label
        htmlFor="subscription"
        className="font-oswald text-center font-semibold"
      >
        SUBSCRIBE
      </label>
      <input
        type="text"
        id="subscription"
        placeholder="Your email address..."
        className="bg-white border-2 px-3 py-1.5 rounded-sm font-inter placeholder:"
      />
      <Button
        type="button"
        children="SUBSCRIBE"
        dynamicStyle="bg-blue-500 text-white font-open-sans rounded-sm "
      />
    </form>
  );
};

export default Subscription;
