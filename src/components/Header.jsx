import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <a href="/" className="logo">
        #VANLIFE
      </a>

      <div className="menu">
        <Link to="/about" className="menu_item">
          About
        </Link>
        <Link to="" className="menu_item">
          Vans
        </Link>
      </div>
    </nav>
  );
};

export default Header;
