import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
  return (
    <>
      <h3>Navbar</h3>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
}

export default Navbar;
