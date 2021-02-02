import React from "react";

import "./App.css";

import Header from "components/header/header";
import Pages from "components/pages/pages";
import Footer from "components/footer/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Pages />
      <Footer />
    </Router>
  );
}

export default App;
