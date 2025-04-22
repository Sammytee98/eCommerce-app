const Button = ({ type, children, dynamicStyle }) => {
  return (
    <button
      type={type}
      className={`px-5 py-1.5 font-oswald ${dynamicStyle} transition cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
