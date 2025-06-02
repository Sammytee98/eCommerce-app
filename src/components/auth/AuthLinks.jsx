import { useAuthModal } from "../../contexts/AuthModalContext";

const AuthLinks = () => {
  const { authMode, setAuthMode } = useAuthModal();

  return (
    <div className="flex justify-center mb-5 gap-4 text-base font-medium">
      <button
        onClick={() => setAuthMode("login")}
        className={`pb-1 cursor-pointer border-b-2 ${
          authMode === "login"
            ? "border-orange-500 text-orange-500"
            : "border-transparent text-gray-500"
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setAuthMode("signup")}
        className={`pb-1 cursor-pointer border-b-2 ${
          authMode === "signup"
            ? "border-orange-500 text-orange-500"
            : "border-transparent text-gray-500"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthLinks;
