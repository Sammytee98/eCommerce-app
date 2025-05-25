import { memo } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Subscription = () => {
  return (
    <form className="w-full flex flex-col space-y-3">
      <label
        htmlFor="subscription"
        className="text-lg tablet:text-xl font-oswald text-center font-medium"
      >
        SUBSCRIBE
      </label>
      <input
        type="text"
        id="subscription"
        placeholder="Your email address..."
        className="w-full border-2 text-sm border-gray-200 bg-white px-3 py-1.5 rounded-md outline-none focus:border-orange-400 font-oswald"
      />

      <Button
        type="button"
        children="SUBSCRIBE"
        className="w-2/4 mx-auto transition cursor-pointer font-oswald "
      />
    </form>
  );
};

export default memo(Subscription);
