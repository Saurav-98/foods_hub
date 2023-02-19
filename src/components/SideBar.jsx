import React from "react";

const SideBar = ({ links, close }) => {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <a href="#!" className="sidebar-link" key={link.name}>
          {link.icon} {link.name}
        </a>
      ))}
    </div>
  );
};

export default SideBar;
