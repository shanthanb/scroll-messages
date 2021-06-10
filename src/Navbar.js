import React from "react";
import "./navbar.css";
import ham from './image/ham.jpg';

function Navbar() {
  return (
    <header>
      <div>
      <img src={ham} width="30" height="40" />
      </div>
      <h3>Messages</h3>
    </header>
  );
}

export default Navbar;
