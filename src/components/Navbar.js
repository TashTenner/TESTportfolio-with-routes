// components/Navbar.js

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
