import React, { useState } from "react";
import SideBar from "./SideBar";
import { FaCog, FaList, FaHome } from "react-icons/fa";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: <FaList />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const closeSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <>
      <nav className="navbar container">
        <a href="#!" className="logo">
          F<span>oo</span>dsHUB
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
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
      {showSideBar && <SideBar close={closeSideBar} links={links} />}
    </>
  );
};

export default NavBar;
