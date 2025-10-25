import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        <h2>aboard</h2>

        <ul className="list-view">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    
        <button className="btn-hov">Get Start</button>
      </nav>
    </div>
  );
};

export default Nav;
