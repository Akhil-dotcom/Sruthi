import React from "react";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>Navbar</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/images">Images</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
