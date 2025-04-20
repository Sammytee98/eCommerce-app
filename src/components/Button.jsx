const Button = ({ children, dynamicStyle }) => {
  return (
    <button className={`px-5 py-2 ${dynamicStyle} transition cursor-pointer`}>
      {children}
    </button>
  );
};

export default Button;
