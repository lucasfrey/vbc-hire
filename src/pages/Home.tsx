import { Link } from "react-router-dom";

function Home() {
  return (
    <ul>
      <li>
        <Link to={"hire/vogelmorn-hall"}>VOGELMORN HALL</Link>
      </li>
      <li>COMMERCIAL KITCHEN</li>
      <li>VOGELMORN UPPER SPACE</li>
      <li>VOGELMORN GREEN</li>
      <li>OUTDOOR PIZZA OVEN</li>
      <li>CO-WORKING SPACE</li>
    </ul>
  );
}

export default Home;
