import clsx from "clsx";

const Button = ({
  type = "button",
  disabled = false,
  children,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "px-5 py-1.5 text-sm tablet:text-base bg-orange-500 hover:bg-orange-600 rounded-sm shadow-md text-white font-oswald $flex items-center transition cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
