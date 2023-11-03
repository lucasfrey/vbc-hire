import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Details from "./pages/Details.tsx";
import Form from "./pages/Form.tsx";
import { Nav } from "./components/nav.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <header>
      <div className="header-shadow">
        <img src="/V.png" height="100" alt="logo" />
        <Nav />
        <h1 className="text-3xl font-bold">Vogelmorn Community Hire</h1>
      </div>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire/:name" element={<Details />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </main>
    <footer className="footer">
      <p>Vogelmorn Community Group Trust</p>
    </footer>
  </BrowserRouter>
);
