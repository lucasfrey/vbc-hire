import { useParams } from "react-router-dom";
import HireForm from "./HireForm/HireForm";

function Details() {
  const { name } = useParams();

  return (
    <>
      <p>Details for {name}</p>
      <h3>Hire {name}</h3>
      <HireForm />
    </>
  );
}

export default Details;
