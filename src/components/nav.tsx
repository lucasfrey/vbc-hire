import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>

      <Link to={"/"}>About</Link>

      <Link to={"/"}>What's On </Link>

      <Link to={"/hire"}>Hire</Link>

      <Link to={"/"}>Music Food & Drink</Link>

      <Link to={"/"}>More</Link>
    </nav>
  );
};
