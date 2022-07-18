import React from "react";
import { Links } from "./Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

function NavBar() {
  return (
    <>
      <Router>
        <div>
          <Links />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavBar;
