import React from "react";
import { Route, Routes } from "react-router-dom";

// All the file which contain the design of the component
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import Projects from "../components/Projects/Projects";

const MainRoute = (props) => {
  return (
    <Routes>
      {/* For Home Page */}
      <Route path="/" element={<Home />} />

      {/* For About Us Page */}
      <Route path="/about" element={<AboutUs />} />

      {/* For Projects Page */}
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default MainRoute;
