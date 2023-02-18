import React, { useState } from "react";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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
      <div
        onClick={() => setShowSideBar((prev) => !prev)}
        className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
