import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default (Page) =>
  function commonTemplate() {
    return (
      <>
        <Router>
          <Header />
          <Page />
          <Footer />
        </Router>
      </>
    );
  };

// export default commonTemplate;
