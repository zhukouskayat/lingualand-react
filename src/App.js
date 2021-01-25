import React from "react";

import "./App.css";

import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
