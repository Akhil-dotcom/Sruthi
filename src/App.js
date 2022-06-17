import React from "react";
// import Navbar from "./componets/Navbar";
// import Welcome from "./componets/Welcome";
// import Table from "./componets/Table";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import SingleImage from "./componets/SingleImage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Image from "./Pages/Image";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Welcome name="Sruthi" gender="F" />
      <Welcome name="Akhil" gender="M" />
      <Table />
      <h1>Learn</h1> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<div>Contact</div>} />
        <Route path="about" element={<About />} />
        <Route path="images" element={<Image />} />
        <Route path="images/:id" element={<SingleImage />} />
        {/* id => 123 */}
      </Routes>
    </div>
  );
}

export default App;
