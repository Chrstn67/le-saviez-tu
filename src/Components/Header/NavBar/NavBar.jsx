// NavBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar__burger`} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar__list ${isMenuOpen ? "show" : ""}`}>
        <li className="navbar__item">
          <NavLink exact to="/">
            Accueil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
