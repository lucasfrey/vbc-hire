import { useParams } from "react-router-dom";

function Details() {
  const { name } = useParams();

  return <p>Details for {name}</p>;
}

export default Details;
