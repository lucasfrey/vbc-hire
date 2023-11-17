import { useParams } from "react-router-dom";
import HireForm from "../HireForm/HireForm";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import vogelmornGreen from "../../assets/green.jpg";

function Details() {
  const { name } = useParams();

  return (
    <>
      <p>Details for {name}</p>
      <h3>Hire {name}</h3>
      <div className="Container">
        <AspectRatio.Root ratio={16 / 9}>
          <img src={vogelmornGreen} className="Image" alt="green" />
        </AspectRatio.Root>
      </div>
      <HireForm />
    </>
  );
}

export default Details;
