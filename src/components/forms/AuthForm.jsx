import { useState } from "react";
import { useAuthModal } from "../../contexts/AuthModalContext";
import Button from "../ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AuthForm = () => {
  const { authMode } = useAuthModal(); // Determines whether user is signing up or logging in
  const [passwordReveal, setPasswordReveal] = useState({
    password: false,
    confirmPassword: false,
  });

  // Toggle visibility for password and confirm password fields
  const revealPassword = () =>
    setPasswordReveal((prev) => ({
      ...prev,
      password: !prev.password,
    }));

  const revealConfirmPassword = () =>
    setPasswordReveal((prev) => ({
      ...prev,
      confirmPassword: !prev.confirmPassword,
    }));

  return (
    <form action="" className="space-y-4">
      {/* Email Field */}
      <div className="flex flex-col space-y-0.5">
        <label className=" text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 border-gray-300 rounded-md px-3 py-1 text-xs"
          type="text"
          id="email"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col space-y-0.5">
        <label className=" text-sm font-medium" htmlFor="password">
          Password
        </label>
        <div className="relative mb-5">
          <input
            className="border-2 border-gray-300 rounded-md px-3 py-1 text-xs absolute top-0 right-0 left-0 "
            type={passwordReveal.password ? "text" : "password"}
            id="password"
          />
          <div
            onClick={revealPassword}
            className="absolute right-3 top-2 text-xs text-gray-500 cursor-pointer"
          >
            {passwordReveal.password ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
      </div>

      {/* Confirm Password Field for Signup */}
      {authMode === "signup" && (
        <div className="flex flex-col space-y-0.5">
          <label className=" text-sm font-medium" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative mb-5">
            <input
              className="border-2 border-gray-300 rounded-md px-3 py-1 text-xs absolute top-0 right-0 left-0"
              type={passwordReveal.confirmPassword ? "text" : "password"}
              id="confirmPassword"
            />
            <div
              onClick={revealConfirmPassword}
              className="absolute right-3 top-2 text-xs text-gray-500 cursor-pointer"
            >
              {passwordReveal.confirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
      )}

      {/* Remeber Me + Forgot Password */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-0.5 w-fit">
          <input type="checkbox" id="rememberMe" className="cursor-pointer" />
          <label
            htmlFor="rememberMe"
            className="text-[14px] font-medium cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <a
          href="#"
          className="text-[14px] text-orange-500 underline font-medium cursor-pointer hover:text-orange-600 transition"
        >
          Forgot Password
        </a>
      </div>

      {/* Submit Button */}
      <Button
        onClick={(e) => e.preventDefault()}
        children={authMode === "login" ? "LOG IN" : "CREATE ACCOUNT"}
        className="w-full"
      />
    </form>
  );
};

export default AuthForm;
