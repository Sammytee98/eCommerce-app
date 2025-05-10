import { memo } from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-6 text-gray-900">
      <a
        target="_blank"
        href="https://facebook.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaFacebook className=" text-lg tablet:text-xl" />
      </a>
      <a
        target="_blank"
        href="https://youtube.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaYoutube className=" text-lg tablet:text-xl" />
      </a>
      <a
        target="_blank"
        href="https://instagram.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaInstagram className=" text-lg tablet:text-xl" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaTwitter className=" text-lg tablet:text-xl" />
      </a>
      <a
        target="_blank"
        href="https://gmail.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaGoogle className=" text-lg tablet:text-xl" />
      </a>
    </div>
  );
};

export default memo(Socials);
