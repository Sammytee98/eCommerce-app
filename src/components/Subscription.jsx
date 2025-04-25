import { memo } from "react";
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
        className="w-full border-3 border-blue-300/30 bg-white px-3 py-1.5 rounded-md outline-none focus:border-blue-300/50 font-inter placeholder:"
      />
      <Button
        type="button"
        children="SUBSCRIBE"
        dynamicStyle="w-2/4 mx-auto bg-blue-300/50 hover:bg-blue-300/70 transition cursor-pointer font-open-sans rounded-md "
      />
    </form>
  );
};

export default memo(Subscription);
