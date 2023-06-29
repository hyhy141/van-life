import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <nav className="header_nav">
      <a href="/" className="logo">
        #VANLIFE
      </a>

      <div className="menu">
        <NavLink
          to="/host"
          className="menu_item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className="menu_item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className="menu_item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <Link to="/login" className="menu_item">
          <img
            src={require("../assets/Icon.png")}
            alt="login"
            className="login_icon"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
