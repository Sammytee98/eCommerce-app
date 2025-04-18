import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const { width, height } = useWindowSize();

  const customStyle = { fontWeight: "bold", fontStyle: "italic" };

  return (
    <header>
      Welcome to the best eCommerce Website{" "}
      <span className="font-bold italic text-4xl">
        {width < 768 ? "Small" : width < 922 ? "medium" : "large"}
      </span>
    </header>
  );
};

export default Header;
