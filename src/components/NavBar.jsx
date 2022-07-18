import React from "react";
import { Links } from "./Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

const Foo = () => {
  return <p>foo</p>;
};

const Bar = () => {
  return <p>bar</p>;
};

function NavBar() {
  return (
    <>
      <Router>
        <div>
          <Links />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Foo />} />
            <Route path="/projects" element={<Foo />} />
            <Route path="/contact" element={<Bar />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavBar;
