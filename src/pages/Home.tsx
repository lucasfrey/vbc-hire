import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-row">
        <Link to={"hire/vogelmorn-hall"}>VOGELMORN HALL</Link>
        <Link to={"hire/vogelmorn-hall"}>COMMERCIAL KITCHEN</Link>
      </div>
      <div className="home-row">
        <Link to={"hire/vogelmorn-hall"}>VOGELMORN UPPER SPACE</Link>
        <Link to={"hire/vogelmorn-hall"}>VOGELMORN GREEN</Link>
      </div>
      <div className="home-row">
        <Link to={"hire/vogelmorn-hall"}>OUTDOOR PIZZA OVEN</Link>
        <Link to={"hire/vogelmorn-hall"}>CO-WORKING SPACE</Link>
      </div>
    </section>
  );
}

export default Home;
