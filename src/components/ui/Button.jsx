import clsx from "clsx";
import { motion } from "framer-motion";

const Button = ({
  type = "button",
  disabled = false,
  children,
  className = "",
  variant = "primary",
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-3 py-2 rounded-sm shadow-md font-oswald text-center flex justify-center transition cursor-pointer flex items-center";

  const variants = {
    primary:
      "text-base tablet:text-base bg-orange-500 hover:bg-orange-600 text-white ",
    outline: "bg-white hover:bg-orange-100 text-base font-medium space-x-1.5",
  };

  const finalClass = clsx(baseClasses, variants[variant], className);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 0.95, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={finalClass}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
