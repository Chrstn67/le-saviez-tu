import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="navbar__list__footer">
        <li className="navbar__item">
          <NavLink to="/mentions-legales">Mentions légales</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
