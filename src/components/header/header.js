import React from "react";

import logo from "illustrations/logo.svg";

import "./header.css";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

const Header = () => (
  <nav id="header">
    <ul>
      <li>
        <NavLink exact to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/courses" className="courses">
          Language courses
        </NavLink>
      </li>
      <li className="c-geometry">
        <NavLink exact to="/contacts" className="contact">
          Contact us
        </NavLink>
      </li>
      <li className="s-geometry">
        <NavLink exact to="/login" className="signUp">
          Sign up
          <FontAwesomeIcon icon={faUser} className="faUser" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
