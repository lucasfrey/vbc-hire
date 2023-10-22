import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./pages/Home.tsx";
import Details from "./pages/Details.tsx";
import Form from "./pages/Form.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <header>
      <h1 className="text-3xl font-bold">VBC Hire</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
    </header>
    <hr />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hire/:name" element={<Details />} />
      <Route path="/contact" element={<Form />} />
    </Routes>
  </BrowserRouter>
);
