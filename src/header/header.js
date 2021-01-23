import React from 'react';
import logo from '../ill/logo.svg';
import './header.css'

const Header = () => (
  <div id="header">
  <a href="index.html"><img className="logo" src={logo} alt="logo" /></a>
  <a href="languageCourses.html" className="courses">Language courses</a>
  <a href="onlineEducation.html" className="contact">Contact us</a>
  <a href="signUp.html" className="signUp">Sign up<i className="fas fa-user"></i></a>
</div>
)

export default Header