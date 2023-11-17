import { Link } from "react-router-dom";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "./styles.css";

import hall from "../../assets/hall.jpg";
import kitchen from "../../assets/commercial-kitchen.jpeg";
import upperSpace from "../../assets/upper-space.jpg";
import vogelmornGreen from "../../assets/green.jpg";
import outdoorPizzaOven from "../../assets/pizza.jpg";
import coWorkingSpace from "../../assets/coworking.jpeg";

function Hire() {
  return (
    <section className="hire">
      <div className="hire-row">
        <Link to={"vogelmorn-hall"}>
          VOGELMORN HALL
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img className="Image" src={hall} alt="Inside vogelmorn hall" />
            </AspectRatio.Root>
          </div>
        </Link>
        <Link to={"commercial-kitchen"}>
          COMMERCIAL KITCHEN
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className="Image"
                src={kitchen}
                alt="Inside vogelmorn hall"
              />
            </AspectRatio.Root>
          </div>
        </Link>
      </div>
      <div className="hire-row">
        <Link to={"upper-space"}>
          UPPER SPACE{" "}
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className="Image"
                src={upperSpace}
                alt="Inside vogelmorn hall"
              />
            </AspectRatio.Root>
          </div>
        </Link>
        <Link to={"vogelmorn-green"}>
          VOGELMORN GREEN{" "}
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className="Image"
                src={vogelmornGreen}
                alt="Inside vogelmorn hall"
              />
            </AspectRatio.Root>
          </div>
        </Link>
      </div>
      <div className="hire-row">
        <Link to={"pizza-oven"}>
          OUTDOOR PIZZA OVEN
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className="Image"
                src={outdoorPizzaOven}
                alt="Inside vogelmorn hall"
              />
            </AspectRatio.Root>
          </div>
        </Link>
        <Link to={"coworking-space"}>
          CO-WORKING SPACE
          <div className="Container">
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className="Image"
                src={coWorkingSpace}
                alt="Inside vogelmorn hall"
              />
            </AspectRatio.Root>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Hire;
