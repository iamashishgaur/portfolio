import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
import Project from "./Component/Project/Project";
import ContactMe from "./Component/ContactMe/ContactMe";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
