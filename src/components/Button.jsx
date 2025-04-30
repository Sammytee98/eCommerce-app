const Button = ({ type, children, dynamicStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-5 py-1.5 font-oswald ${dynamicStyle} transition cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
