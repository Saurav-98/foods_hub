import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>dsHUB
      </a>
      <div className="nav-links">
        <a href="#!" className="active">
          Home
        </a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
      </div>
      <div className="sidebar-btn">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;