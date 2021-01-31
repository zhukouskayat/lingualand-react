import React from "react";

import "./App.css";

import Header from "./header/header";
import Content from "./content/content";
import Subscribe from "./subscribe/subscribe"
import Footer from "./footer/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
