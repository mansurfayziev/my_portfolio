import React, { useState } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Style } from "./style";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import FluidAnimation from "react-fluid-animation";

const App = () => {
  const [state, setstate] = useState(false);
  return (
    <Style>
      <div className="anime">
        <FluidAnimation style={{ height: "100vh" }} />
      </div>
      <button
        className={state === true ? "menu-btn" : "menu-btn x"}
        onClick={() => setstate((p) => !p)}
      >
        +
      </button>
      <Navbar state={state} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Style>
  );
};

export default App;
