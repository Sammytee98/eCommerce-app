import { memo } from "react";
import Socials from "./ui/Socials";

const Contact = () => {
  return (
    <section className="space-y-2 flex flex-col items-center">
      <h2 className="text-lg tablet:text-xl font-medium font-oswald">
        CONTACT
      </h2>
      <Socials />
    </section>
  );
};

export default memo(Contact);
