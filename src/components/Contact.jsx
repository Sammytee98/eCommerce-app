import { memo } from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section className="space-y-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold font-oswald">CONTACT</h2>
      <Socials />
    </section>
  );
};

export default memo(Contact);
