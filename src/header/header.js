import React from "react";

import logo from "../ill/logo.svg";

import "./header.css";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

const Header = () => (
  <div id="header">
    <NavLink exact to="/">
      <img className="logo" src={logo} alt="logo" />
    </NavLink>
    <NavLink to="/courses" className="courses">
      Language courses
    </NavLink>
    <NavLink exact to="/contacts" className="contact">
      Contact us
    </NavLink>
    <NavLink exact to="/login" className="signUp">
      Sign up
      <FontAwesomeIcon icon={faUser} />
    </NavLink>
  </div>
);

export default Header;
