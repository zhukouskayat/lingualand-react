import React from "react";

import "./App.css";

import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
