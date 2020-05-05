import React, { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import "./App.css";
import commonTemplate from "./commonTemplate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Blog from "./components/Blog";
import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

function App() {
  const [showNav, setShowNav] = useState("hide");

  let prevScrollY = 0;
  const MIN_SCROLL_DIST = 100;
  const RE_HIDE = 800;

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("scroll", throttle(handleScroll, 100));

    // this will clean up the "scroll" every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll(e) {
    const change = window.scrollY - prevScrollY;

    if (window.scrollY > RE_HIDE) {
      if (change > 0 && change > MIN_SCROLL_DIST) {
        setShowNav("hide");
      } else if (change < 0 && change < MIN_SCROLL_DIST) {
        setShowNav("show");
      }
    } else if (window.scrollY < RE_HIDE) {
      if (change > 0 && change > MIN_SCROLL_DIST) {
        setShowNav("show");
      } else if (window.scrollY === 0) {
        setShowNav("hide");
      }
    }

    prevScrollY =
      Math.abs(change) > MIN_SCROLL_DIST ? window.scrollY : prevScrollY;
  }

  return (
    <Router>
      <div>
        <Header showNav={showNav} />
        {/* <Home /> */}

        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/nosotros">
            <About />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route> */}
          <Route exact path="/blog">
            {/* <Blog /> */}
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// export default commonTemplate(App);
