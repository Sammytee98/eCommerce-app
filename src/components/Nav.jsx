import { Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/">Shop</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
      <Button children="Sign Up" />
    </>
  );
};

export default Nav;
