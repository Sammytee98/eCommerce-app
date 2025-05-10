const Button = ({ type, children, dynamicStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-5 py-1.5 text-sm tablet:text-base bg-orange-500 hover:bg-orange-600 rounded-sm shadow-md text-white font-oswald ${dynamicStyle} transition cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
