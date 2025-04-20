import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-5">
      <a
        href="https://facebook.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaFacebook className=" text-xl text-blue-800" />
      </a>
      <a
        href="https://youtube.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaYoutube className=" text-xl text-red-600" />
      </a>
      <a
        href="https://instagram.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaInstagram className=" text-xl text-red-500" />
      </a>
      <a
        href="https://twitter.com"
        className="hover:scale-90 transition-all transform duration-200 hover:rotate-180"
      >
        <FaTwitter className=" text-xl text-blue-500" />
      </a>
    </div>
  );
};

export default Socials;
