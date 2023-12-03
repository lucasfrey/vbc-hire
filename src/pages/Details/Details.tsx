import { useParams } from "react-router-dom";
import HireForm from "../HireForm/HireForm";
import Content from "./Content";
import "./styles.css";

function Details() {
  const { name } = useParams() || "";

  return (
    <>
      <Content name={name} />
      <HireForm />
    </>
  );
}

export default Details;
