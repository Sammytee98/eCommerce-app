import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";
import { useAuthModal } from "../../contexts/AuthModalContext";

const AuthSocials = () => {
  const { authMode } = useAuthModal();

  return (
    <div className="mt-8 mb-2 space-y-3 flex flex-col items-center">
      <p className="text-base font-medium">
        &mdash; {authMode === "login" ? "Or Login with" : "Or Sign Up with"}{" "}
        &mdash;
      </p>
      <div className="flex  space-x-3">
        {/* Google Auth */}
        <div className="flex items-center  bg-red-700 hover:bg-red-400 transition cursor-pointer py-1 px-2 rounded-md">
          <FaGoogle className="text-lg text-white pr-1 border-r-1 border-white" />
          <p className="text-white ml-1 text-base">Google</p>
        </div>

        {/* Facebook Auth */}
        <div className="flex items-center bg-blue-600 hover:bg-blue-400 transition cursor-pointer py-1 px-2 rounded-md">
          <FaFacebook className="text-lg text-white pr-1 border-r-1 border-white" />
          <p className="text-white ml-1 text-base">Facebook</p>
        </div>

        {/* Github Auth */}
        <div className="flex items-center bg-black hover:bg-gray-600 transition cursor-pointer py-1 px-2 rounded-md">
          <FaGithub className="text-lg text-white pr-1 border-r-1 border-white" />
          <p className="text-white ml-1 text-base">Github</p>
        </div>
      </div>
    </div>
  );
};

export default AuthSocials;
